// src/adminjs/resources/index.ts

import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode, Favorite, Like, User, WatchTime } from "../../models";
import { categoryResourceOptions } from "./category";
import { courseResourceFeatures, courseResourceOptions } from "./course";
import { episodeResourceFeatures, episodeResourceOptions } from "./episode";
import { userResourceOptions } from "./user";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions
  },
  {
    resource: Course,
    options: courseResourceOptions,
    features: courseResourceFeatures
  },
  {
    resource: Episode,
    options: episodeResourceOptions,
    features: episodeResourceFeatures
  },
  {
    resource: User,
    options: userResourceOptions
  },
  {
    resource: Like,
    options: { navigation: false },
  },
  {
    resource: Favorite,
    options: { navigation: false },
  },
  {
    resource: WatchTime,
    options: { navigation: false },
  }
]