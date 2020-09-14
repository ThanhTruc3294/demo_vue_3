const LanguageConfig = { language: "" };
const environment = "development";
if (environment === "development") {
  LanguageConfig.language = "jp";
}
// if (environment === "production") {
//   LanguageConfig.language = "en";
// }
export default LanguageConfig;
