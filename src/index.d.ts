import { NativeModules, Image } from 'react-native';

export enum MediaType {
  VIDEO = 'video',
  IMAGE = 'image',
  ALL = 'all',
}

export type Results = {
  path: string;
  fileName: string;
  localIdentifier: string;
  width: number;
  height: number;
  mime: string;
  type: string;
  size: number;
  bucketId?: number;
  realPath?: string;
  parentFolderName?: string;
  thumbnail?: string;
  creationDate?: string;
};

export type PickerErrorCode =
  | 'PICKER_CANCELLED'
  | 'NO_LIBRARY_PERMISSION'
  | 'NO_CAMERA_PERMISSION';

export type Options = {
  isPreview?: boolean;
  selectedColor?: string;
  tapHereToChange?: string;
  cancelTitle?: string;
  doneTitle?: string;
  emptyMessage?: string;
  emptyImage?: Image;
  selectMessage?: string;
  deselectMessage?: string;
  usedCameraButton?: boolean;
  usedPrefetch?: boolean;
  previewAtForceTouch?: boolean;
  allowedLivePhotos?: boolean;
  allowedVideo?: boolean;
  allowedAlbumCloudShared?: boolean;
  allowedPhotograph?: boolean; // for camera ?: allow this option when you want to take a photos
  allowedVideoRecording?: boolean; //for camera ?: allow this option when you want to recording video.
  maxVideoDuration?: Number; //for camera ?: max video recording duration
  autoPlay?: boolean;
  muteAudio?: boolean;
  preventAutomaticLimitedAccessAlert?: boolean; // newest iOS 14
  mediaType?: MediaType;
  numberOfColumn?: number;
  maxSelectedAssets?: number;
  fetchOption?: Object;
  fetchCollectionOption?: Object;
  maximumMessageTitle?: string;
  maximumMessage?: string;
  messageTitleButton?: string;
  //resize thumbnail
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  haveThumbnail?: boolean;
};

export interface SinglePickerOptions extends Options {
  selectedAssets?: Results;
  singleSelectedMode: true;
}

export interface MultiPickerOptions extends Options {
  selectedAssets?: Results[];
  singleSelectedMode?: false;
}

type MultipleImagePickerType = {
  openPicker(options: MultiPickerOptions): Promise<Results[]>;
  openPicker(options: SinglePickerOptions): Promise<Results>;
};

const { MultipleImagePicker } = NativeModules;

export default MultipleImagePicker as MultipleImagePickerType;
