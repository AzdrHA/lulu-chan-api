export class UtilsStr {
  public static slugify(str: string): string {
    return str.toLowerCase().replace(/ /g, '-');
  }
}
