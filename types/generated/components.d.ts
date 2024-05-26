import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentImageContentImage extends Schema.Component {
  collectionName: 'components_content_image_content_images';
  info: {
    displayName: 'ContentImage';
    icon: 'landscape';
  };
  attributes: {
    image: Attribute.Media;
    caption: Attribute.String;
  };
}

export interface ContentTextContentText extends Schema.Component {
  collectionName: 'components_content_text_content_texts';
  info: {
    displayName: 'ContentText';
    icon: 'expand';
  };
  attributes: {
    body: Attribute.Blocks;
  };
}

export interface ContentVideoContentVideo extends Schema.Component {
  collectionName: 'components_content_video_content_videos';
  info: {
    displayName: 'ContentVideo';
    icon: 'monitor';
  };
  attributes: {
    caption: Attribute.String;
    video: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content-image.content-image': ContentImageContentImage;
      'content-text.content-text': ContentTextContentText;
      'content-video.content-video': ContentVideoContentVideo;
    }
  }
}
