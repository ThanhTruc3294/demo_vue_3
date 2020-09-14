import MessagesData from "../assets/json/Messages.json";
import LanguageConfig from "../../public/_config";

export default class LanguageUtil {
  private readonly messages: Array<Array<string>> = MessagesData.messages;
  private static _instance: LanguageUtil;
  private readonly _lang: object;

  private constructor() {
    this._lang = [];
    if (LanguageConfig.language === "jp") {
      this.messages.map((item: Array<string>) => {
        // @ts-ignore
        this._lang[item[0]] = item[1];
      });
    } else {
      this.messages.map((item: Array<string>) => {
        // @ts-ignore
        this._lang[item[0]] = item[2];
      });
    }
  }

  public static getInstance(): LanguageUtil {
    if (!this._instance) {
      this._instance = new LanguageUtil();
    }
    return this._instance;
  }

  get lang(): object {
    return this._lang;
  }
}
