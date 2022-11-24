import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";
const config = {
  name: "CosmicBot",
  //BotName
  inviteLink:
    "https://discord.com/oauth2/authorize?client_id=1044636559091171328&scope=applications.commands%20bot&permissions=8",
  //BotInvite Link
  Features: [
    {
      name: "Moderation",
      description:
        "Moderation Commands included.",
      logo: <MdAddModerator className="h-10 w-10" />,
    },
    {
      name: "99% Uptime",
      description:
        "Uptime is a measure of system reliability, expressed as the percentage of time a machine, typically a computer.",
      logo: <SiProbot className="h-10 w-10" />,
    },
    {
      name: "Automation",
      description:
        "Automation describes a wide range of technologies that reduce  human intervention in processes.",
      logo: <TbMessage2Code className="h-10 w-10" />,
    },
    {
      name: "Welcomer",
      description:
        "Working on it, coming soon...",
      logo: <CgCrown className="h-10 w-10" />,
    },
    // You can added more features if need add
  ],
  //Bot Features
  serverCount: 2, //-  - Your
  memberCount: 0, //--   - Bot
  executedCommand: 0, //--  - Stats
  availableCommand: 50, //---   - Here
  //Do not change if you don't know about them
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
  youTubeLogo: (
    <BsYoutube className="h-10 w-10 text-[#FF0000] hover:scale-125 easeIn cursor-pointer" />
  ),
  //----------------------------------------------------------------
  // Your social handle links
  twitterLink: "https://twitter.com/FarzansStudio",
  discordLink: "https://discord.gg/dsjn8BFhBf",
  youtubeLink: "https://www.youtube.com/channel/UC4YnNU_j1i3KlgMTQ_cbYXA",
};

export default config;
