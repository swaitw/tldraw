import { TldrawUiMenuGroup, TldrawUiMenuItem } from 'tldraw'
import { openUrl } from './utils/url'

export function Links() {
	return (
		<>
			<TldrawUiMenuGroup id="links">
				<TldrawUiMenuItem
					id="about"
					label="help-menu.terms"
					icon="external-link"
					readonlyOk
					onSelect={() => {
						openUrl(
							'https://github.com/tldraw/tldraw/blob/main/apps/dotcom/client/TERMS_OF_SERVICE.md'
						)
					}}
				/>
				<TldrawUiMenuItem
					id="about"
					label="help-menu.privacy"
					icon="external-link"
					readonlyOk
					onSelect={() => {
						openUrl(
							'https://github.com/tldraw/tldraw/blob/main/apps/dotcom/client/PRIVACY_POLICY.md'
						)
					}}
				/>
			</TldrawUiMenuGroup>
			<TldrawUiMenuGroup id="tldraw">
				<TldrawUiMenuItem
					id="about"
					label="help-menu.about"
					icon="external-link"
					readonlyOk
					onSelect={() => {
						openUrl('https://tldraw.dev')
					}}
				/>
			</TldrawUiMenuGroup>
		</>
	)
}
