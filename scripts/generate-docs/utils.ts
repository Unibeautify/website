import * as _ from "lodash";

export function optionKeyToTitle(key: string): string {
    return key.split('_').map(_.capitalize).join(' ');
}

export function slugify(title: string): string {
    return encodeURIComponent(
      title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace("#", "sharp")
    );
  }
