export default class ObjectUtil {
  public static copyObject(object: object) {
    return JSON.parse(JSON.stringify(object));
  }
}
