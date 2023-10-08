
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const SESSION_MANAGER: string;
	export const WINDOWID: string;
	export const COLORTERM: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_SESSION_PATH: string;
	export const NVM_INC: string;
	export const TERM_PROGRAM_VERSION: string;
	export const NVIM: string;
	export const TMUX: string;
	export const LANGUAGE: string;
	export const NODE: string;
	export const LC_ADDRESS: string;
	export const LC_NAME: string;
	export const SHELL_SESSION_ID: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const TMUX_PLUGIN_MANAGER_PATH: string;
	export const npm_config_local_prefix: string;
	export const HOMEBREW_PREFIX: string;
	export const NVIM_LOG_FILE: string;
	export const DESKTOP_SESSION: string;
	export const LC_MONETARY: string;
	export const GTK_RC_FILES: string;
	export const XCURSOR_SIZE: string;
	export const EDITOR: string;
	export const MASON: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const MANPATH: string;
	export const SYSTEMD_EXEC_PID: string;
	export const OMF_PATH: string;
	export const XAUTHORITY: string;
	export const MOTD_SHOWN: string;
	export const GTK2_RC_FILES: string;
	export const HOME: string;
	export const LC_PAPER: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const KONSOLE_DBUS_SERVICE: string;
	export const npm_package_version: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const STARSHIP_SHELL: string;
	export const VIMRUNTIME: string;
	export const KONSOLE_DBUS_SESSION: string;
	export const PROFILEHOME: string;
	export const XDG_SEAT_PATH: string;
	export const INVOCATION_ID: string;
	export const KONSOLE_VERSION: string;
	export const MANAGERPID: string;
	export const STARSHIP_SESSION_KEY: string;
	export const KDE_SESSION_UID: string;
	export const INFOPATH: string;
	export const NVM_DIR: string;
	export const VIM: string;
	export const XDG_SESSION_CLASS: string;
	export const LC_IDENTIFICATION: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const USER: string;
	export const TMUX_PANE: string;
	export const HOMEBREW_CELLAR: string;
	export const KDE_SESSION_VERSION: string;
	export const PAM_KWALLET5_LOGIN: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const NVM_CD_FLAGS: string;
	export const LC_TELEPHONE: string;
	export const HOMEBREW_REPOSITORY: string;
	export const LC_MEASUREMENT: string;
	export const XDG_VTNR: string;
	export const UBUNTU_MENUPROXY: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const MYVIMRC: string;
	export const DEBUGINFOD_URLS: string;
	export const LC_TIME: string;
	export const npm_package_json: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const JOURNAL_STREAM: string;
	export const XCURSOR_THEME: string;
	export const GTK3_MODULES: string;
	export const XDG_DATA_DIRS: string;
	export const KDE_FULL_SESSION: string;
	export const PATH: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const KDE_APPLICATIONS_AS_SCOPE: string;
	export const tmux_version: string;
	export const MAIL: string;
	export const NVM_BIN: string;
	export const OMF_CONFIG: string;
	export const npm_node_execpath: string;
	export const LC_NUMERIC: string;
	export const TERM_PROGRAM: string;
	export const KONSOLE_DBUS_WINDOW: string;
	export const _: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		SESSION_MANAGER: string;
		WINDOWID: string;
		COLORTERM: string;
		XDG_CONFIG_DIRS: string;
		XDG_SESSION_PATH: string;
		NVM_INC: string;
		TERM_PROGRAM_VERSION: string;
		NVIM: string;
		TMUX: string;
		LANGUAGE: string;
		NODE: string;
		LC_ADDRESS: string;
		LC_NAME: string;
		SHELL_SESSION_ID: string;
		MEMORY_PRESSURE_WRITE: string;
		TMUX_PLUGIN_MANAGER_PATH: string;
		npm_config_local_prefix: string;
		HOMEBREW_PREFIX: string;
		NVIM_LOG_FILE: string;
		DESKTOP_SESSION: string;
		LC_MONETARY: string;
		GTK_RC_FILES: string;
		XCURSOR_SIZE: string;
		EDITOR: string;
		MASON: string;
		GTK_MODULES: string;
		XDG_SEAT: string;
		PWD: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		MANPATH: string;
		SYSTEMD_EXEC_PID: string;
		OMF_PATH: string;
		XAUTHORITY: string;
		MOTD_SHOWN: string;
		GTK2_RC_FILES: string;
		HOME: string;
		LC_PAPER: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		KONSOLE_DBUS_SERVICE: string;
		npm_package_version: string;
		MEMORY_PRESSURE_WATCH: string;
		STARSHIP_SHELL: string;
		VIMRUNTIME: string;
		KONSOLE_DBUS_SESSION: string;
		PROFILEHOME: string;
		XDG_SEAT_PATH: string;
		INVOCATION_ID: string;
		KONSOLE_VERSION: string;
		MANAGERPID: string;
		STARSHIP_SESSION_KEY: string;
		KDE_SESSION_UID: string;
		INFOPATH: string;
		NVM_DIR: string;
		VIM: string;
		XDG_SESSION_CLASS: string;
		LC_IDENTIFICATION: string;
		TERM: string;
		npm_package_name: string;
		USER: string;
		TMUX_PANE: string;
		HOMEBREW_CELLAR: string;
		KDE_SESSION_VERSION: string;
		PAM_KWALLET5_LOGIN: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		NVM_CD_FLAGS: string;
		LC_TELEPHONE: string;
		HOMEBREW_REPOSITORY: string;
		LC_MEASUREMENT: string;
		XDG_VTNR: string;
		UBUNTU_MENUPROXY: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		MYVIMRC: string;
		DEBUGINFOD_URLS: string;
		LC_TIME: string;
		npm_package_json: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		JOURNAL_STREAM: string;
		XCURSOR_THEME: string;
		GTK3_MODULES: string;
		XDG_DATA_DIRS: string;
		KDE_FULL_SESSION: string;
		PATH: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		KDE_APPLICATIONS_AS_SCOPE: string;
		tmux_version: string;
		MAIL: string;
		NVM_BIN: string;
		OMF_CONFIG: string;
		npm_node_execpath: string;
		LC_NUMERIC: string;
		TERM_PROGRAM: string;
		KONSOLE_DBUS_WINDOW: string;
		_: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
