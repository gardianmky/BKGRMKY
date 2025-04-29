// This file provides a reference for creating DatoCMS models that map to our components

export const heroModels = {
  basicHero: {
    apiKey: "basic_hero",
    name: "Basic Hero",
    singleton: false,
    sortable: false,
    modularBlock: true,
    fields: [
      {
        apiKey: "title",
        name: "Title",
        type: "string",
        required: true,
        localized: true,
      },
      {
        apiKey: "subtitle",
        name: "Subtitle",
        type: "string",
        required: false,
        localized: true,
      },
      {
        apiKey: "description",
        name: "Description",
        type: "text",
        required: false,
        localized: true,
      },
      {
        apiKey: "primary_cta",
        name: "Primary CTA",
        type: "link",
        required: false,
      },
      {
        apiKey: "secondary_cta",
        name: "Secondary CTA",
        type: "link",
        required: false,
      },
      {
        apiKey: "background_image",
        name: "Background Image",
        type: "file",
        required: false,
        validators: {
          format: {
            predefined_list: ["image"],
          },
        },
      },
      {
        apiKey: "overlay_color",
        name: "Overlay Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "overlay_opacity",
        name: "Overlay Opacity",
        type: "float",
        required: false,
        validators: {
          range: {
            min: 0,
            max: 1,
          },
        },
      },
      {
        apiKey: "text_color",
        name: "Text Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "text_alignment",
        name: "Text Alignment",
        type: "enum",
        required: false,
        enum: {
          values: [
            {
              id: "left",
              name: "Left",
            },
            {
              id: "center",
              name: "Center",
            },
            {
              id: "right",
              name: "Right",
            },
          ],
        },
      },
    ],
  },

  splitHero: {
    apiKey: "split_hero",
    name: "Split Hero",
    singleton: false,
    sortable: false,
    modularBlock: true,
    fields: [
      {
        apiKey: "title",
        name: "Title",
        type: "string",
        required: true,
        localized: true,
      },
      {
        apiKey: "subtitle",
        name: "Subtitle",
        type: "string",
        required: false,
        localized: true,
      },
      {
        apiKey: "description",
        name: "Description",
        type: "text",
        required: false,
        localized: true,
      },
      {
        apiKey: "primary_cta",
        name: "Primary CTA",
        type: "link",
        required: false,
      },
      {
        apiKey: "secondary_cta",
        name: "Secondary CTA",
        type: "link",
        required: false,
      },
      {
        apiKey: "image",
        name: "Image",
        type: "file",
        required: true,
        validators: {
          format: {
            predefined_list: ["image"],
          },
        },
      },
      {
        apiKey: "image_position",
        name: "Image Position",
        type: "enum",
        required: false,
        enum: {
          values: [
            {
              id: "left",
              name: "Left",
            },
            {
              id: "right",
              name: "Right",
            },
          ],
        },
      },
      {
        apiKey: "background_color",
        name: "Background Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "text_color",
        name: "Text Color",
        type: "color",
        required: false,
      },
    ],
  },

  videoHero: {
    apiKey: "video_hero",
    name: "Video Hero",
    singleton: false,
    sortable: false,
    modularBlock: true,
    fields: [
      {
        apiKey: "title",
        name: "Title",
        type: "string",
        required: true,
        localized: true,
      },
      {
        apiKey: "subtitle",
        name: "Subtitle",
        type: "string",
        required: false,
        localized: true,
      },
      {
        apiKey: "description",
        name: "Description",
        type: "text",
        required: false,
        localized: true,
      },
      {
        apiKey: "primary_cta",
        name: "Primary CTA",
        type: "link",
        required: false,
      },
      {
        apiKey: "secondary_cta",
        name: "Secondary CTA",
        type: "link",
        required: false,
      },
      {
        apiKey: "video_url",
        name: "Video URL",
        type: "file",
        required: true,
        validators: {
          format: {
            predefined_list: ["video"],
          },
        },
      },
      {
        apiKey: "poster_image",
        name: "Poster Image",
        type: "file",
        required: false,
        validators: {
          format: {
            predefined_list: ["image"],
          },
        },
      },
      {
        apiKey: "overlay_color",
        name: "Overlay Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "overlay_opacity",
        name: "Overlay Opacity",
        type: "float",
        required: false,
        validators: {
          range: {
            min: 0,
            max: 1,
          },
        },
      },
      {
        apiKey: "text_color",
        name: "Text Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "text_alignment",
        name: "Text Alignment",
        type: "enum",
        required: false,
        enum: {
          values: [
            {
              id: "left",
              name: "Left",
            },
            {
              id: "center",
              name: "Center",
            },
            {
              id: "right",
              name: "Right",
            },
          ],
        },
      },
    ],
  },

  multiColumnHero: {
    apiKey: "multi_column_hero",
    name: "Multi-Column Hero",
    singleton: false,
    sortable: false,
    modularBlock: true,
    fields: [
      {
        apiKey: "title",
        name: "Title",
        type: "string",
        required: true,
        localized: true,
      },
      {
        apiKey: "subtitle",
        name: "Subtitle",
        type: "string",
        required: false,
        localized: true,
      },
      {
        apiKey: "columns",
        name: "Columns",
        type: "blocks",
        required: true,
        blocks: [
          {
            apiKey: "column",
            name: "Column",
            fields: [
              {
                apiKey: "title",
                name: "Title",
                type: "string",
                required: true,
                localized: true,
              },
              {
                apiKey: "description",
                name: "Description",
                type: "text",
                required: true,
                localized: true,
              },
              {
                apiKey: "image",
                name: "Image",
                type: "file",
                required: false,
                validators: {
                  format: {
                    predefined_list: ["image"],
                  },
                },
              },
              {
                apiKey: "cta",
                name: "CTA",
                type: "link",
                required: false,
              },
            ],
          },
        ],
      },
      {
        apiKey: "background_image",
        name: "Background Image",
        type: "file",
        required: false,
        validators: {
          format: {
            predefined_list: ["image"],
          },
        },
      },
      {
        apiKey: "overlay_color",
        name: "Overlay Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "overlay_opacity",
        name: "Overlay Opacity",
        type: "float",
        required: false,
        validators: {
          range: {
            min: 0,
            max: 1,
          },
        },
      },
      {
        apiKey: "background_color",
        name: "Background Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "text_color",
        name: "Text Color",
        type: "color",
        required: false,
      },
    ],
  },

  searchHero: {
    apiKey: "search_hero",
    name: "Search Hero",
    singleton: false,
    sortable: false,
    modularBlock: true,
    fields: [
      {
        apiKey: "title",
        name: "Title",
        type: "string",
        required: true,
        localized: true,
      },
      {
        apiKey: "subtitle",
        name: "Subtitle",
        type: "string",
        required: false,
        localized: true,
      },
      {
        apiKey: "search_placeholder",
        name: "Search Placeholder",
        type: "string",
        required: false,
        localized: true,
      },
      {
        apiKey: "search_button_label",
        name: "Search Button Label",
        type: "string",
        required: false,
        localized: true,
      },
      {
        apiKey: "background_image",
        name: "Background Image",
        type: "file",
        required: false,
        validators: {
          format: {
            predefined_list: ["image"],
          },
        },
      },
      {
        apiKey: "overlay_color",
        name: "Overlay Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "overlay_opacity",
        name: "Overlay Opacity",
        type: "float",
        required: false,
        validators: {
          range: {
            min: 0,
            max: 1,
          },
        },
      },
      {
        apiKey: "text_color",
        name: "Text Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "categories",
        name: "Categories",
        type: "blocks",
        required: false,
        blocks: [
          {
            apiKey: "category",
            name: "Category",
            fields: [
              {
                apiKey: "value",
                name: "Value",
                type: "string",
                required: true,
              },
              {
                apiKey: "label",
                name: "Label",
                type: "string",
                required: true,
                localized: true,
              },
            ],
          },
        ],
      },
    ],
  },

  countdownHero: {
    apiKey: "countdown_hero",
    name: "Countdown Hero",
    singleton: false,
    sortable: false,
    modularBlock: true,
    fields: [
      {
        apiKey: "title",
        name: "Title",
        type: "string",
        required: true,
        localized: true,
      },
      {
        apiKey: "subtitle",
        name: "Subtitle",
        type: "string",
        required: false,
        localized: true,
      },
      {
        apiKey: "description",
        name: "Description",
        type: "text",
        required: false,
        localized: true,
      },
      {
        apiKey: "target_date",
        name: "Target Date",
        type: "date_time",
        required: true,
      },
      {
        apiKey: "primary_cta",
        name: "Primary CTA",
        type: "link",
        required: false,
      },
      {
        apiKey: "secondary_cta",
        name: "Secondary CTA",
        type: "link",
        required: false,
      },
      {
        apiKey: "background_image",
        name: "Background Image",
        type: "file",
        required: false,
        validators: {
          format: {
            predefined_list: ["image"],
          },
        },
      },
      {
        apiKey: "overlay_color",
        name: "Overlay Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "overlay_opacity",
        name: "Overlay Opacity",
        type: "float",
        required: false,
        validators: {
          range: {
            min: 0,
            max: 1,
          },
        },
      },
      {
        apiKey: "text_color",
        name: "Text Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "text_alignment",
        name: "Text Alignment",
        type: "enum",
        required: false,
        enum: {
          values: [
            {
              id: "left",
              name: "Left",
            },
            {
              id: "center",
              name: "Center",
            },
            {
              id: "right",
              name: "Right",
            },
          ],
        },
      },
    ],
  },

  tabbedHero: {
    apiKey: "tabbed_hero",
    name: "Tabbed Hero",
    singleton: false,
    sortable: false,
    modularBlock: true,
    fields: [
      {
        apiKey: "title",
        name: "Title",
        type: "string",
        required: true,
        localized: true,
      },
      {
        apiKey: "subtitle",
        name: "Subtitle",
        type: "string",
        required: false,
        localized: true,
      },
      {
        apiKey: "tabs",
        name: "Tabs",
        type: "blocks",
        required: true,
        blocks: [
          {
            apiKey: "tab",
            name: "Tab",
            fields: [
              {
                apiKey: "id",
                name: "ID",
                type: "string",
                required: true,
                hint: "Unique identifier for this tab",
              },
              {
                apiKey: "label",
                name: "Label",
                type: "string",
                required: true,
                localized: true,
              },
              {
                apiKey: "content_title",
                name: "Content Title",
                type: "string",
                required: true,
                localized: true,
              },
              {
                apiKey: "content_description",
                name: "Content Description",
                type: "text",
                required: true,
                localized: true,
              },
              {
                apiKey: "content_image",
                name: "Content Image",
                type: "file",
                required: false,
                validators: {
                  format: {
                    predefined_list: ["image"],
                  },
                },
              },
              {
                apiKey: "content_cta",
                name: "Content CTA",
                type: "link",
                required: false,
              },
            ],
          },
        ],
      },
      {
        apiKey: "background_image",
        name: "Background Image",
        type: "file",
        required: false,
        validators: {
          format: {
            predefined_list: ["image"],
          },
        },
      },
      {
        apiKey: "overlay_color",
        name: "Overlay Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "overlay_opacity",
        name: "Overlay Opacity",
        type: "float",
        required: false,
        validators: {
          range: {
            min: 0,
            max: 1,
          },
        },
      },
      {
        apiKey: "background_color",
        name: "Background Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "text_color",
        name: "Text Color",
        type: "color",
        required: false,
      },
    ],
  },

  parallaxHero: {
    apiKey: "parallax_hero",
    name: "Parallax Hero",
    singleton: false,
    sortable: false,
    modularBlock: true,
    fields: [
      {
        apiKey: "title",
        name: "Title",
        type: "string",
        required: true,
        localized: true,
      },
      {
        apiKey: "subtitle",
        name: "Subtitle",
        type: "string",
        required: false,
        localized: true,
      },
      {
        apiKey: "description",
        name: "Description",
        type: "text",
        required: false,
        localized: true,
      },
      {
        apiKey: "primary_cta",
        name: "Primary CTA",
        type: "link",
        required: false,
      },
      {
        apiKey: "secondary_cta",
        name: "Secondary CTA",
        type: "link",
        required: false,
      },
      {
        apiKey: "background_image",
        name: "Background Image",
        type: "file",
        required: true,
        validators: {
          format: {
            predefined_list: ["image"],
          },
        },
      },
      {
        apiKey: "foreground_image",
        name: "Foreground Image",
        type: "file",
        required: false,
        validators: {
          format: {
            predefined_list: ["image"],
          },
        },
      },
      {
        apiKey: "foreground_position",
        name: "Foreground Position",
        type: "enum",
        required: false,
        enum: {
          values: [
            {
              id: "left",
              name: "Left",
            },
            {
              id: "center",
              name: "Center",
            },
            {
              id: "right",
              name: "Right",
            },
          ],
        },
      },
      {
        apiKey: "overlay_color",
        name: "Overlay Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "overlay_opacity",
        name: "Overlay Opacity",
        type: "float",
        required: false,
        validators: {
          range: {
            min: 0,
            max: 1,
          },
        },
      },
      {
        apiKey: "text_color",
        name: "Text Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "text_alignment",
        name: "Text Alignment",
        type: "enum",
        required: false,
        enum: {
          values: [
            {
              id: "left",
              name: "Left",
            },
            {
              id: "center",
              name: "Center",
            },
            {
              id: "right",
              name: "Right",
            },
          ],
        },
      },
    ],
  },

  animatedHero: {
    apiKey: "animated_hero",
    name: "Animated Hero",
    singleton: false,
    sortable: false,
    modularBlock: true,
    fields: [
      {
        apiKey: "title",
        name: "Title",
        type: "string",
        required: true,
        localized: true,
      },
      {
        apiKey: "subtitle",
        name: "Subtitle",
        type: "string",
        required: false,
        localized: true,
      },
      {
        apiKey: "description",
        name: "Description",
        type: "text",
        required: false,
        localized: true,
      },
      {
        apiKey: "primary_cta",
        name: "Primary CTA",
        type: "link",
        required: false,
      },
      {
        apiKey: "secondary_cta",
        name: "Secondary CTA",
        type: "link",
        required: false,
      },
      {
        apiKey: "background_image",
        name: "Background Image",
        type: "file",
        required: false,
        validators: {
          format: {
            predefined_list: ["image"],
          },
        },
      },
      {
        apiKey: "floating_elements",
        name: "Floating Elements",
        type: "blocks",
        required: false,
        blocks: [
          {
            apiKey: "floating_element",
            name: "Floating Element",
            fields: [
              {
                apiKey: "image",
                name: "Image",
                type: "file",
                required: true,
                validators: {
                  format: {
                    predefined_list: ["image"],
                  },
                },
              },
              {
                apiKey: "size",
                name: "Size",
                type: "enum",
                required: true,
                enum: {
                  values: [
                    {
                      id: "small",
                      name: "Small",
                    },
                    {
                      id: "medium",
                      name: "Medium",
                    },
                    {
                      id: "large",
                      name: "Large",
                    },
                  ],
                },
              },
              {
                apiKey: "position",
                name: "Position",
                type: "enum",
                required: true,
                enum: {
                  values: [
                    {
                      id: "top-left",
                      name: "Top Left",
                    },
                    {
                      id: "top-right",
                      name: "Top Right",
                    },
                    {
                      id: "bottom-left",
                      name: "Bottom Left",
                    },
                    {
                      id: "bottom-right",
                      name: "Bottom Right",
                    },
                    {
                      id: "center-left",
                      name: "Center Left",
                    },
                    {
                      id: "center-right",
                      name: "Center Right",
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        apiKey: "overlay_color",
        name: "Overlay Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "overlay_opacity",
        name: "Overlay Opacity",
        type: "float",
        required: false,
        validators: {
          range: {
            min: 0,
            max: 1,
          },
        },
      },
      {
        apiKey: "text_color",
        name: "Text Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "text_alignment",
        name: "Text Alignment",
        type: "enum",
        required: false,
        enum: {
          values: [
            {
              id: "left",
              name: "Left",
            },
            {
              id: "center",
              name: "Center",
            },
            {
              id: "right",
              name: "Right",
            },
          ],
        },
      },
    ],
  },
}

export const contentModels = {
  featureGrid: {
    apiKey: "feature_grid",
    name: "Feature Grid",
    singleton: false,
    sortable: false,
    modularBlock: true,
    fields: [
      {
        apiKey: "title",
        name: "Title",
        type: "string",
        required: false,
        localized: true,
      },
      {
        apiKey: "subtitle",
        name: "Subtitle",
        type: "string",
        required: false,
        localized: true,
      },
      {
        apiKey: "description",
        name: "Description",
        type: "text",
        required: false,
        localized: true,
      },
      {
        apiKey: "features",
        name: "Features",
        type: "blocks",
        required: true,
        blocks: [
          {
            apiKey: "feature_item",
            name: "Feature Item",
            fields: [
              {
                apiKey: "title",
                name: "Title",
                type: "string",
                required: true,
                localized: true,
              },
              {
                apiKey: "description",
                name: "Description",
                type: "text",
                required: true,
                localized: true,
              },
              {
                apiKey: "icon",
                name: "Icon",
                type: "file",
                required: false,
                validators: {
                  format: {
                    predefined_list: ["image"],
                  },
                },
              },
              {
                apiKey: "icon_class_name",
                name: "Icon Class Name",
                type: "string",
                required: false,
              },
            ],
          },
        ],
      },
      {
        apiKey: "columns",
        name: "Columns",
        type: "enum",
        required: false,
        enum: {
          values: [
            {
              id: "2",
              name: "2 Columns",
            },
            {
              id: "3",
              name: "3 Columns",
            },
            {
              id: "4",
              name: "4 Columns",
            },
          ],
        },
      },
      {
        apiKey: "background_color",
        name: "Background Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "text_color",
        name: "Text Color",
        type: "color",
        required: false,
      },
    ],
  },

  textWithImage: {
    apiKey: "text_with_image",
    name: "Text with Image",
    singleton: false,
    sortable: false,
    modularBlock: true,
    fields: [
      {
        apiKey: "title",
        name: "Title",
        type: "string",
        required: true,
        localized: true,
      },
      {
        apiKey: "content",
        name: "Content",
        type: "structured_text",
        required: true,
        localized: true,
      },
      {
        apiKey: "image",
        name: "Image",
        type: "file",
        required: true,
        validators: {
          format: {
            predefined_list: ["image"],
          },
        },
      },
      {
        apiKey: "image_position",
        name: "Image Position",
        type: "enum",
        required: false,
        enum: {
          values: [
            {
              id: "left",
              name: "Left",
            },
            {
              id: "right",
              name: "Right",
            },
          ],
        },
      },
      {
        apiKey: "cta",
        name: "CTA",
        type: "link",
        required: false,
      },
      {
        apiKey: "background_color",
        name: "Background Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "text_color",
        name: "Text Color",
        type: "color",
        required: false,
      },
    ],
  },

  testimonials: {
    apiKey: "testimonials",
    name: "Testimonials",
    singleton: false,
    sortable: false,
    modularBlock: true,
    fields: [
      {
        apiKey: "title",
        name: "Title",
        type: "string",
        required: false,
        localized: true,
      },
      {
        apiKey: "subtitle",
        name: "Subtitle",
        type: "string",
        required: false,
        localized: true,
      },
      {
        apiKey: "testimonials",
        name: "Testimonials",
        type: "blocks",
        required: true,
        blocks: [
          {
            apiKey: "testimonial",
            name: "Testimonial",
            fields: [
              {
                apiKey: "quote",
                name: "Quote",
                type: "text",
                required: true,
                localized: true,
              },
              {
                apiKey: "author",
                name: "Author",
                type: "string",
                required: true,
                localized: true,
              },
              {
                apiKey: "role",
                name: "Role",
                type: "string",
                required: false,
                localized: true,
              },
              {
                apiKey: "company",
                name: "Company",
                type: "string",
                required: false,
                localized: true,
              },
              {
                apiKey: "avatar",
                name: "Avatar",
                type: "file",
                required: false,
                validators: {
                  format: {
                    predefined_list: ["image"],
                  },
                },
              },
            ],
          },
        ],
      },
      {
        apiKey: "layout",
        name: "Layout",
        type: "enum",
        required: false,
        enum: {
          values: [
            {
              id: "grid",
              name: "Grid",
            },
            {
              id: "slider",
              name: "Slider",
            },
            {
              id: "single",
              name: "Single",
            },
          ],
        },
      },
      {
        apiKey: "background_color",
        name: "Background Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "text_color",
        name: "Text Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "accent_color",
        name: "Accent Color",
        type: "color",
        required: false,
      },
    ],
  },
}

export const ctaModels = {
  simpleCTA: {
    apiKey: "simple_cta",
    name: "Simple CTA",
    singleton: false,
    sortable: false,
    modularBlock: true,
    fields: [
      {
        apiKey: "title",
        name: "Title",
        type: "string",
        required: true,
        localized: true,
      },
      {
        apiKey: "description",
        name: "Description",
        type: "text",
        required: false,
        localized: true,
      },
      {
        apiKey: "primary_cta",
        name: "Primary CTA",
        type: "link",
        required: true,
      },
      {
        apiKey: "secondary_cta",
        name: "Secondary CTA",
        type: "link",
        required: false,
      },
      {
        apiKey: "background_color",
        name: "Background Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "text_color",
        name: "Text Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "alignment",
        name: "Alignment",
        type: "enum",
        required: false,
        enum: {
          values: [
            {
              id: "left",
              name: "Left",
            },
            {
              id: "center",
              name: "Center",
            },
            {
              id: "right",
              name: "Right",
            },
          ],
        },
      },
    ],
  },

  bannerCTA: {
    apiKey: "banner_cta",
    name: "Banner CTA",
    singleton: false,
    sortable: false,
    modularBlock: true,
    fields: [
      {
        apiKey: "title",
        name: "Title",
        type: "string",
        required: true,
        localized: true,
      },
      {
        apiKey: "description",
        name: "Description",
        type: "text",
        required: false,
        localized: true,
      },
      {
        apiKey: "cta",
        name: "CTA",
        type: "link",
        required: true,
      },
      {
        apiKey: "background_image",
        name: "Background Image",
        type: "file",
        required: false,
        validators: {
          format: {
            predefined_list: ["image"],
          },
        },
      },
      {
        apiKey: "background_color",
        name: "Background Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "text_color",
        name: "Text Color",
        type: "color",
        required: false,
      },
    ],
  },

  newsletterCTA: {
    apiKey: "newsletter_cta",
    name: "Newsletter CTA",
    singleton: false,
    sortable: false,
    modularBlock: true,
    fields: [
      {
        apiKey: "title",
        name: "Title",
        type: "string",
        required: true,
        localized: true,
      },
      {
        apiKey: "description",
        name: "Description",
        type: "text",
        required: false,
        localized: true,
      },
      {
        apiKey: "button_label",
        name: "Button Label",
        type: "string",
        required: false,
        localized: true,
      },
      {
        apiKey: "placeholder_text",
        name: "Placeholder Text",
        type: "string",
        required: false,
        localized: true,
      },
      {
        apiKey: "success_message",
        name: "Success Message",
        type: "string",
        required: false,
        localized: true,
      },
      {
        apiKey: "background_color",
        name: "Background Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "text_color",
        name: "Text Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "alignment",
        name: "Alignment",
        type: "enum",
        required: false,
        enum: {
          values: [
            {
              id: "left",
              name: "Left",
            },
            {
              id: "center",
              name: "Center",
            },
            {
              id: "right",
              name: "Right",
            },
          ],
        },
      },
    ],
  },

  cardCTA: {
    apiKey: "card_cta",
    name: "Card CTA",
    singleton: false,
    sortable: false,
    modularBlock: true,
    fields: [
      {
        apiKey: "title",
        name: "Title",
        type: "string",
        required: true,
        localized: true,
      },
      {
        apiKey: "description",
        name: "Description",
        type: "text",
        required: true,
        localized: true,
      },
      {
        apiKey: "cta",
        name: "CTA",
        type: "link",
        required: true,
      },
      {
        apiKey: "background_color",
        name: "Background Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "card_background_color",
        name: "Card Background Color",
        type: "color",
        required: false,
      },
      {
        apiKey: "text_color",
        name: "Text Color",
        type: "color",
        required: false,
      },
    ],
  },
}

// Create a page model that can use all of these components
export const pageModel = {
  apiKey: "page",
  name: "Page",
  singleton: false,
  sortable: true,
  tree: true,
  draftMode: true,
  fields: [
    {
      apiKey: "title",
      name: "Title",
      type: "string",
      required: true,
      localized: true,
    },
    {
      apiKey: "slug",
      name: "Slug",
      type: "slug",
      required: true,
      localized: false,
      validations: {
        unique: true,
      },
    },
    {
      apiKey: "seo",
      name: "SEO",
      type: "seo",
      required: false,
    },
    {
      apiKey: "content",
      name: "Content",
      type: "blocks",
      required: false,
      blocks: [...Object.values(heroModels), ...Object.values(contentModels), ...Object.values(ctaModels)],
    },
  ],
}
