// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Instagram from "@mui/icons-material/Instagram";

// Material Kit 2 React components
import MKTypography from "./components/MKTypography";

// Images
import logoCT from "./assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Ionut Iorgulescu",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/ionutiorgulescu.ro",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/iorgulescuionut",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/ionutiorgulescu",
    },
    {
      icon: <Instagram />,
      link: "https://www.instagram.com/ionutiorgulescu",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "#" },
        { name: "freebies", href: "#" },
        { name: "premium tools", href: "#" },
        { name: "blog", href: "#" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "#" },
        { name: "bits & snippets", href: "#" },
        { name: "affiliate program", href: "#" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "#" },
        { name: "knowledge center", href: "#" },
        { name: "custom development", href: "#" },
        { name: "sponsorships", href: "#" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "#" },
        { name: "privacy policy", href: "#" },
        { name: "licenses (EULA)", href: "#" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Ionut Iorgulescu WebSite by{" "}
      <MKTypography
        component="a"
        href="https://ionutiorgulescu.ro"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Ionut Iorgulescu
      </MKTypography>
      .
    </MKTypography>
  ),
};
