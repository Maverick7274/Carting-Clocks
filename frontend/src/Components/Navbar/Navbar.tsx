type Props = {};

const HSThemeAppearance = {
    init(): void {
        const defaultTheme: string = "default";
        let theme: string = localStorage.getItem("hs_theme") || defaultTheme;

        if (document.querySelector("html").classList.contains("dark")) return;
        this.setAppearance(theme);
    },
    _resetStylesOnLoad(): HTMLStyleElement {
        const $resetStyles: HTMLStyleElement = document.createElement("style");
        $resetStyles.innerText = `*{transition: unset !important;}`;
        $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");
        document.head.appendChild($resetStyles);
        return $resetStyles;
    },
    setAppearance(
        theme: string,
        saveInStore: boolean = true,
        dispatchEvent: boolean = true
    ): void {
        const $resetStylesEl: HTMLStyleElement = this._resetStylesOnLoad();

        if (saveInStore) {
            localStorage.setItem("hs_theme", theme);
        }

        if (theme === "auto") {
            theme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "default";
        }

        document.querySelector("html").classList.remove("dark");
        document.querySelector("html").classList.remove("default");
        document.querySelector("html").classList.remove("auto");

        document.querySelector("html").classList.add(this.getOriginalAppearance());

        setTimeout(() => {
            $resetStylesEl.remove();
        });

        if (dispatchEvent) {
            window.dispatchEvent(
                new CustomEvent("on-hs-appearance-change", { detail: theme })
            );
        }
    },
    getAppearance(): string {
        let theme: string = this.getOriginalAppearance();
        if (theme === "auto") {
            theme = window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "default";
        }
        return theme;
    },
    getOriginalAppearance(): string {
        const defaultTheme: string = "default";
        return localStorage.getItem("hs_theme") || defaultTheme;
    },
};

HSThemeAppearance.init();

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e: MediaQueryListEvent) => {
        if (HSThemeAppearance.getOriginalAppearance() === "auto") {
            HSThemeAppearance.setAppearance("auto", false);
        }
    });

window.addEventListener("load", () => {
    const $clickableThemes: NodeListOf<HTMLElement> = document.querySelectorAll(
        "[data-hs-theme-click-value]"
    );
    const $switchableThemes: NodeListOf<HTMLInputElement> =
        document.querySelectorAll("[data-hs-theme-switch]");

    $clickableThemes.forEach(($item) => {
        $item.addEventListener("click", () =>
            HSThemeAppearance.setAppearance(
                $item.getAttribute("data-hs-theme-click-value"),
                true,
                $item
            )
        );
    });

    $switchableThemes.forEach(($item) => {
        $item.addEventListener("change", (e: Event) => {
            HSThemeAppearance.setAppearance(
                (e.target as HTMLInputElement).checked ? "dark" : "default"
            );
        });

        $item.checked = HSThemeAppearance.getAppearance() === "dark";
    });

    window.addEventListener("on-hs-appearance-change", (e: CustomEvent) => {
        $switchableThemes.forEach(($item) => {
            $item.checked = e.detail === "dark";
        });
    });
});

// Create a function where we save the setting in localStorage

const saveSetting = (key: string, value: string) => {
    // If the key doesn't exist, return false
    if (!key) return false;

    // If the value doesn't exist, return false
    if (!value) return false;

    // If the value is not a string, return false
    if (typeof value !== "string") return false;

    // If the value is not 'dark' or 'light', return false
    if (value !== "dark" && value !== "light") return false;

    // Save the setting in localStorage
    localStorage.setItem(key, value);

    // Return true
    return true;
};

export default function Navbar({ }: Props) {
    return (
        <div>
            <div>
                <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
                    <nav
                        className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
                        aria-label="Global"
                    >
                        <div className="flex items-center justify-between">
                            <a
                                className="flex-none text-xl font-semibold dark:text-white"
                                href="#"
                                aria-label="Brand"
                            >
                                Carting Clocks
                            </a>
                            <div className="sm:hidden">
                                <button
                                    type="button"
                                    className="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    data-hs-collapse="#navbar-collapse-with-animation"
                                    aria-controls="navbar-collapse-with-animation"
                                    aria-label="Toggle navigation"
                                >
                                    <svg
                                        className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line x1="3" x2="21" y1="6" y2="6" />
                                        <line x1="3" x2="21" y1="12" y2="12" />
                                        <line x1="3" x2="21" y1="18" y2="18" />
                                    </svg>
                                    <svg
                                        className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div
                            id="navbar-collapse-with-animation"
                            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
                        >
                            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
                                <a
                                    className="font-medium text-blue-600 sm:py-6 dark:text-blue-500"
                                    href="#"
                                    aria-current="page"
                                >
                                    Landing
                                </a>
                                <a
                                    className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                                    href="#"
                                >
                                    Account
                                </a>
                                <a
                                    className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                                    href="#"
                                >
                                    Work
                                </a>
                                <a
                                    className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                                    href="#"
                                >
                                    Blog
                                </a>

                                <div className="flex items-center gap-x-2 sm:ms-auto">
                                    <a
                                        className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
                                        href="#"
                                    >
                                        <svg
                                            className="flex-shrink-0 w-4 h-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                        Log in
                                    </a>
                                    <div
                                        className="hs-dropdown"
                                        data-hs-dropdown-placement="bottom-right"
                                        data-hs-dropdown-offset="30"
                                    >
                                        <button
                                            type="button"
                                            className="hs-dropdown-toggle hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
                                        >
                                            <svg
                                                className="hs-dark-mode-active:hidden block w-4 h-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                                            </svg>
                                            <svg
                                                className="hs-dark-mode-active:block hidden w-4 h-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <circle cx="12" cy="12" r="4" />
                                                <path d="M12 8a2 2 0 1 0 4 4" />
                                                <path d="M12 2v2" />
                                                <path d="M12 20v2" />
                                                <path d="m4.93 4.93 1.41 1.41" />
                                                <path d="m17.66 17.66 1.41 1.41" />
                                                <path d="M2 12h2" />
                                                <path d="M20 12h2" />
                                                <path d="m6.34 17.66-1.41 1.41" />
                                                <path d="m19.07 4.93-1.41 1.41" />
                                            </svg>
                                        </button>

                                        <div
                                            id="selectThemeDropdown"
                                            className="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-2 space-y-1 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                                        >
                                            <button
                                                type="button"
                                                className="hs-auto-mode-active:bg-gray-100 w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                data-hs-theme-click-value="auto"
                                            >
                                                Auto (system default)
                                            </button>
                                            <button
                                                type="button"
                                                className="hs-default-mode-active:bg-gray-100 w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                data-hs-theme-click-value="default"
                                            >
                                                Default (light mode)
                                            </button>
                                            <button
                                                type="button"
                                                className="hs-dark-mode-active:bg-gray-700 w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                                data-hs-theme-click-value="dark"
                                            >
                                                Dark
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    );
}
