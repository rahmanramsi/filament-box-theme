const colors = require("tailwindcss/colors");
const colorVariable = require("@mertasan/tailwindcss-variables/colorVariable");

module.exports = {
    content: [
        "./resources/**/*.{blade.php, js}",
        "../../vendor/filament/**/*.blade.php",
    ],
    darkMode: "class",
    theme: {
        variables: {
            DEFAULT: {
                colors: {
                    primary: colors.emerald,
                    danger: colors.red,
                    success: colors.green,
                    warning: colors.yellow,
                },
            },
            ".box-indigo": {
                colors: {
                    primary: colors.indigo,
                },
            },
            ".box-blue": {
                colors: {
                    primary: colors.blue,
                },
            },
            ".box-green": {
                colors: {
                    primary: colors.green,
                },
            },
            ".box-orange": {
                colors: {
                    primary: colors.orange,
                },
            },
            ".box-red": {
                colors: {
                    primary: colors.red,
                    danger: colors.rose,
                },
            },
        },
        extend: {
            colors: {
                primary: {
                    50: colorVariable("var(--colors-primary-50)"),
                    100: colorVariable("var(--colors-primary-100)"),
                    200: colorVariable("var(--colors-primary-200)"),
                    300: colorVariable("var(--colors-primary-300)"),
                    400: colorVariable("var(--colors-primary-400)"),
                    500: colorVariable("var(--colors-primary-500)"),
                    600: colorVariable("var(--colors-primary-600)"),
                    700: colorVariable("var(--colors-primary-700)"),
                    800: colorVariable("var(--colors-primary-800)"),
                    900: colorVariable("var(--colors-primary-900)"),
                },
                danger: {
                    50: colorVariable("var(--colors-danger-50)"),
                    100: colorVariable("var(--colors-danger-100)"),
                    200: colorVariable("var(--colors-danger-200)"),
                    300: colorVariable("var(--colors-danger-300)"),
                    400: colorVariable("var(--colors-danger-400)"),
                    500: colorVariable("var(--colors-danger-500)"),
                    600: colorVariable("var(--colors-danger-600)"),
                    700: colorVariable("var(--colors-danger-700)"),
                    800: colorVariable("var(--colors-danger-800)"),
                    900: colorVariable("var(--colors-danger-900)"),
                },
                success: {
                    50: colorVariable("var(--colors-success-50)"),
                    100: colorVariable("var(--colors-success-100)"),
                    200: colorVariable("var(--colors-success-200)"),
                    300: colorVariable("var(--colors-success-300)"),
                    400: colorVariable("var(--colors-success-400)"),
                    500: colorVariable("var(--colors-success-500)"),
                    600: colorVariable("var(--colors-success-600)"),
                    700: colorVariable("var(--colors-success-700)"),
                    800: colorVariable("var(--colors-success-800)"),
                    900: colorVariable("var(--colors-success-900)"),
                },
                warning: {
                    50: colorVariable("var(--colors-warning-50)"),
                    100: colorVariable("var(--colors-warning-100)"),
                    200: colorVariable("var(--colors-warning-200)"),
                    300: colorVariable("var(--colors-warning-300)"),
                    400: colorVariable("var(--colors-warning-400)"),
                    500: colorVariable("var(--colors-warning-500)"),
                    600: colorVariable("var(--colors-warning-600)"),
                    700: colorVariable("var(--colors-warning-700)"),
                    800: colorVariable("var(--colors-warning-800)"),
                    900: colorVariable("var(--colors-warning-900)"),
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@mertasan/tailwindcss-variables")({
            colorVariables: true,
        }),
    ],
};
