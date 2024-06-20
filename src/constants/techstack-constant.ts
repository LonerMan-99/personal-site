import { IconType } from "react-icons";
import {
 SiHtml5,
 SiJavascript,
 SiTypescript,
 SiTailwindcss,
 SiNextdotjs,
 SiMongodb,
 SiFirebase,
 SiSupabase,
 SiRedux,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import {
 FaNodeJs,
 FaGitAlt,
 FaBitbucket,
 FaGithub,
 FaSass,
} from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { TbBrandKotlin, TbBrandReactNative } from "react-icons/tb";

interface TechStackItem {
 icon: IconType;
 name: string;
}

export const WEBSITE_TECHSTACK_JSON: TechStackItem[] = [
 {
  icon: SiHtml5,
  name: "HTML",
 },
 {
  icon: SiJavascript,
  name: "JavaScript",
 },
 {
  icon: SiTypescript,
  name: "TypeScript",
 },
 {
  icon: IoLogoCss3,
  name: "CSS",
 },
 {
  icon: FaSass,
  name: "SASS",
 },
 {
  icon: SiTailwindcss,
  name: "Tailwind CSS",
 },
 {
  icon: SiNextdotjs,
  name: "Next",
 },
 {
  icon: GrReactjs,
  name: "React",
 },
 {
  icon: SiRedux,
  name: "Redux",
 },
 {
  icon: FaNodeJs,
  name: "Node",
 },
];

export const MOBILE_TECHSTACK_JSON: TechStackItem[] = [
 {
  icon: BsAndroid2,
  name: "Android Native",
 },
 {
  icon: TbBrandKotlin,
  name: "Kotlin",
 },
 {
  icon: TbBrandReactNative,
  name: "React Native",
 },
];

export const OTHER_TECHSTACK_JSON: TechStackItem[] = [
 {
  icon: FaGitAlt,
  name: "Git",
 },
 {
  icon: FaBitbucket,
  name: "Bitbucket",
 },
 {
  icon: FaGithub,
  name: "Github",
 },
 {
  icon: SiMongodb,
  name: "Mongo DB",
 },
 {
  icon: SiFirebase,
  name: "Firebase",
 },
 {
  icon: SiSupabase,
  name: "Supabase",
 },
];
