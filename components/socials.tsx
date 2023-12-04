import { GitHub, Linkedin, Twitter } from 'react-feather'

// TODO: replace social icons with more interesting ones
export function Socials() {
    return (
        <ul className="flex gap-3 mb-4">
            <li className="block">
                <a
                    className="footerLink"
                    href="https://github.com/vickOnRails"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="github"
                >
                    <GitHub size={18} />
                </a>
            </li>

            <li>
                <a
                    className="block"
                    href="https://linkedin.com/in/victor-ofoegbu"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="linkedin"
                >
                    <Linkedin size={18} />
                </a>
            </li>

            <li>
                <a
                    className="block"
                    href="https://twitter.com/vick_onrails"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="twitter"
                >
                    <Twitter size={18} />
                </a>
            </li>
        </ul>
    )
}
