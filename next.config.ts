import type { NextConfig } from "next";
import type { Configuration, RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
  transpilePackages: ["rc-util", "rc-picker", "rc-pagination", "@ant-design/icons-svg"],
  // Добавляем кастомный webpack-правилo для поддержки SVG как компонента
  webpack(config: Configuration) {
    if (!config.module || !config.module.rules) return config;
    // Отключаем стандартную обработку svg
    config.module.rules = config.module.rules
      .filter((rule): rule is RuleSetRule => Boolean(rule))
      .map((rule: RuleSetRule) => {
        // Проверяем, есть ли поле oneOf (webpack может использовать его для группировки правил)
        if (
          rule &&
          typeof rule === "object" &&
          Array.isArray((rule as unknown as { oneOf?: RuleSetRule[] }).oneOf)
        ) {
          const ruleWithOneOf = rule as unknown as { oneOf: RuleSetRule[] };
          ruleWithOneOf.oneOf = ruleWithOneOf.oneOf.map((oneOfRule: RuleSetRule) => {
            if (
              oneOfRule &&
              (oneOfRule as { test?: RegExp }).test &&
              (oneOfRule as { test?: RegExp }).test instanceof RegExp &&
              (oneOfRule as { test?: RegExp }).test!.test("file.svg")
            ) {
              // Исключаем svg из стандартного file-loader/url-loader
              return { ...oneOfRule, exclude: /\.svg$/i };
            }
            return oneOfRule;
          });
          return ruleWithOneOf as RuleSetRule;
        }
        return rule;
      });
    // Добавляем правило для SVGR
    config.module!.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: require.resolve("@svgr/webpack"),
          options: {
            prettier: true,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false,
                },
              ],
            },
            titleProp: true,
            ref: true,
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
