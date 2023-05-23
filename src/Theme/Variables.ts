/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export enum Colors {
  TRANSPARENT = "rgba(0,0,0,0)",
  INPUT_BACKGROUND = "#FFFFFF",
  WHITE = "#ffffff",
  BLACK = "#000000",
  TEXT = "#212529",
  SUBTEXT = "#D9D9D9",
  PRIMARY = "#50A458",
  SECONDARY = "#BCFFBF",
  TERTIARY = "#DEFFDD",
  SUCCESS = "#28a745",
  ERROR = "#dc3545",
}

export enum NavigationColors {
  PRIMARY = Colors.PRIMARY,
}

/**
 * FontSize
 */
export enum FontSize {
  SMALL = 16,
  REGULAR = 20,
  TITLE = 28,
  LARGE = 48,
}

/**
 * Metrics Sizes
 */
const tiny = 5; // 10
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const large = regular * 2; // 30

export enum MetricsSizes {
  TINY = tiny,
  SMALL = small,
  REGULAR = regular,
  LARGE = large,
}
