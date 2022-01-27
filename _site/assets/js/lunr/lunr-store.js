var store = [{
        "title": "Quick-Start Guide",
        "excerpt":"Minimal Mistakes has been developed as a Gem-based theme for easier use, and 100% compatible with GitHub Pages when used as a remote theme. If you enjoy this theme, please consider sponsoring me to continue developing and maintaining it. Installing the theme If you’re running Jekyll v3.7+ and self-hosting you...","categories": [],
        "tags": [],
        "url": "/docs/quick-start-guide/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Structure",
        "excerpt":"Nothing clever here :wink:. Layouts, data files, and includes are all placed in their default locations. Stylesheets and scripts in assets, and a few development related files in the project’s root directory. Please note: If you installed Minimal Mistakes via the Ruby Gem method, theme files like _layouts, _includes, _sass,...","categories": [],
        "tags": [],
        "url": "/docs/structure/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Installation",
        "excerpt":"Install the theme 1. For a new site, install the minimal-mistakes-jekyll gem, remote theme, or fork the Minimal Mistakes repo on GitHub following the steps outlined in the Quick-Start Guide. If you plan to host with GitHub Pages be sure to properly setup jekyll-remote-theme as it is required for the...","categories": [],
        "tags": [],
        "url": "/docs/installation/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Upgrading",
        "excerpt":"If you’re using the Ruby Gem or remote theme versions of Minimal Mistakes, upgrading is fairly painless. To check which version you are currently using, view the source of your built site and you should see something similar to: &lt;!-- Minimal Mistakes Jekyll Theme 4.24.0 by Michael Rose Copyright 2013-2020...","categories": [],
        "tags": [],
        "url": "/docs/upgrading/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Configuration",
        "excerpt":"Settings that affect your entire site can be changed in Jekyll’s configuration file: _config.yml, found in the root of your project. If you don’t have this file you’ll need to copy or create one using the theme’s default _config.yml as a base. Note: for technical reasons, _config.yml is NOT reloaded...","categories": [],
        "tags": [],
        "url": "/docs/configuration/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Overriding Theme Defaults",
        "excerpt":"When installing the theme as a Ruby Gem its layouts, includes, stylesheets, and other assets are all bundled in the gem. Meaning they’re not easily visible in your project. Each of these files can be modified, but you’ll need to copy the default version into your project first. For example,...","categories": [],
        "tags": [],
        "url": "/docs/overriding-theme-defaults/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Navigation",
        "excerpt":"Customize site navigational links through a Jekyll data file. Masthead The masthead links use a “priority plus” design pattern. Meaning, show as many navigation items that will fit horizontally with a toggle to reveal the rest. To define these links add titles and URLs under the main key in _data/navigation.yml:...","categories": [],
        "tags": [],
        "url": "/docs/navigation/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "UI Text",
        "excerpt":"Text for UI elements, _layouts, and _includes grouped together as a set of translation keys. This is by no means a full-on i18n solution, but it does help make customizing theme text a bit easier. The English1 main keys in _data/ui-text.yml are translated in the following languages: Arabic (عربي) Brazilian...","categories": [],
        "tags": [],
        "url": "/docs/ui-text/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Authors",
        "excerpt":"Sites that may have content authored from various individuals can be accommodated by using data files. To assign an author to a post or page that is different from the site author specified in _config.yml: Step 1. Create _data/authors.yml and add authors using the following format. Any variables found under...","categories": [],
        "tags": [],
        "url": "/docs/authors/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layouts",
        "excerpt":"The bread and butter of any theme. Below you’ll find the layouts included with Minimal Mistakes, what they look like and the type of content they’ve been built for. Default layout The base layout all other layouts inherit from. There’s not much to this layout apart from pulling in several...","categories": [],
        "tags": [],
        "url": "/docs/layouts/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Working with Posts",
        "excerpt":"Posts are stored in the _posts directory and named according to the YEAR-MONTH-DAY-title.MARKUP format as per the usual. Where YEAR is a four-digit number, MONTH and DAY are both two-digit numbers, and MARKUP is the file extension representing the format used in the file. For example, the following are examples...","categories": [],
        "tags": [],
        "url": "/docs/posts/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Working with Pages",
        "excerpt":"To better organize all of your pages you can centralize them into a single location similar to posts and collections. Step 1: Start by placing pages (.md or .html files) into a _pages directory. Meaningfully naming files should be the goal. Avoid patterns like /about/index.md as it makes distinguishing between...","categories": [],
        "tags": [],
        "url": "/docs/pages/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Working with Collections",
        "excerpt":"Collections like posts and pages work as you’d expect. If you’re new to them be sure to read Jekyll’s documentation. The theme has been built with collections in mind and you will find several examples on the demo site (portfolio, recipes, pets). Collections in the Wild: This set of documentation...","categories": [],
        "tags": [],
        "url": "/docs/collections/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Helpers",
        "excerpt":"You can think of these Jekyll helpers as little shortcuts. Since GitHub Pages doesn’t allow most plugins — custom tags are out. Instead the theme leverages includes to do something similar. Group by array Jekyll Group-By-Array by Max White. A liquid include file for Jekyll that allows an object to...","categories": [],
        "tags": [],
        "url": "/docs/helpers/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Utility Classes",
        "excerpt":"Using the Kramdown Markdown renderer with Jekyll allows you to add block and inline attributes. This is nice if you want to add custom styling to text and image, and still write in Markdown. Jekyll 3: Kramdown is the default for jekyll new sites and those hosted on GitHub Pages....","categories": [],
        "tags": [],
        "url": "/docs/utility-classes/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Stylesheets",
        "excerpt":"The theme’s assets/css/main.css file is built from several SCSS partials located in _sass/ and is structured as follows: minimal-mistakes ├── _sass | └── minimal-mistakes | ├── vendor # vendor SCSS partials | | ├── breakpoint # media query mixins | | ├── magnific-popup # Magnific Popup lightbox | | └──...","categories": [],
        "tags": [],
        "url": "/docs/stylesheets/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "JavaScript",
        "excerpt":"The theme’s assets/js/main.min.js script is built from several vendor, jQuery plugins, and other scripts found in assets/js/. minimal mistakes ├── assets | ├── js | | ├── plugins | | | ├── gumshoe.js # simple scrollspy | | | ├── jquery.ba-throttle-debounce.js # rate-limit functions | | | ├── jquery.fitvids.js #...","categories": [],
        "tags": [],
        "url": "/docs/javascript/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "History",
        "excerpt":"Unreleased Bug Fixes Fix documentation typos. #3232 #3318 Fix Keybase icon in author sidebar. #3221 Fix sort order of Staticman comments when data files aren’t named alphabetically. #3184 Fix broken documentation link and add Baidu site verification to _config.yml files. #3139 Fix layout: compress issue with HTML comment in video...","categories": [],
        "tags": [],
        "url": "/docs/history/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Contributing",
        "excerpt":"Having trouble working with the theme? Found a typo in the documentation? Interested in adding a feature or fixing a bug? Then by all means submit an issue or pull request. If this is your first pull request, it may be helpful to read up on the GitHub Flow first....","categories": [],
        "tags": [],
        "url": "/docs/contributing/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "2.2 Documentation",
        "excerpt":"Installation Minimal Mistakes now requires Jekyll 3.0. Make sure to run bundle update if you aren’t on the latest version to update all gem dependencies. If you are creating a new Jekyll site using Minimal Mistakes follow these steps: Fork the Minimal Mistakes repo. Clone the repo you just forked...","categories": [],
        "tags": [],
        "url": "/docs/docs-2-2/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "License",
        "excerpt":"The MIT License (MIT) Copyright (c) 2013-2022 Michael Rose and contributors Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge,...","categories": [],
        "tags": [],
        "url": "/docs/license/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Lhasa Apso",
        "excerpt":"The Lhasa Apso (/ˈlɑːsə ˈæpsoʊ/ lah-sə ap-soh) is a non-sporting dog breed originating in Tibet. It was bred as an interior sentinel in the Buddhist monasteries, to alert the monks to any intruders who entered. Lhasa is the capital city of Tibet, and apso is a word in the Tibetan...","categories": [],
        "tags": [],
        "url": "/pets/lhasa-apso/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Tabby",
        "excerpt":"A tabby is any domestic cat that has a coat featuring distinctive stripes, dots, lines or swirling patterns, usually together with a mark resembling an ‘M’ on its forehead. Tabbies are sometimes erroneously assumed to be a cat breed. In fact, the tabby pattern is found in many breeds, as...","categories": [],
        "tags": [],
        "url": "/pets/tabby/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Baz Boom Identity",
        "excerpt":"Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single syndicated Instagram HuffPo community mthomps, Mozilla iPhone app should isn’t a business model curmudgeon Snarkmarket Tim Carmody production of innocence. Fuego tweets community DocumentCloud metered model Gardening &amp; War section...","categories": [],
        "tags": [],
        "url": "/portfolio/baz-boom-identity/",
        "teaser": "/assets/images/unsplash-gallery-image-1-th.jpg"
      },{
        "title": "Fizz Bang Identity",
        "excerpt":"Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single syndicated Instagram HuffPo community mthomps, Mozilla iPhone app should isn’t a business model curmudgeon Snarkmarket Tim Carmody production of innocence. Fuego tweets community DocumentCloud metered model Gardening &amp; War section...","categories": [],
        "tags": [],
        "url": "/portfolio/fizz-bang-identity/",
        "teaser": "/assets/images/unsplash-gallery-image-2-th.jpg"
      },{
        "title": "Foo Bar Identity",
        "excerpt":"Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single syndicated Instagram HuffPo community mthomps, Mozilla iPhone app should isn’t a business model curmudgeon Snarkmarket Tim Carmody production of innocence. Fuego tweets community DocumentCloud metered model Gardening &amp; War section...","categories": [],
        "tags": [],
        "url": "/portfolio/foo-bar-website/",
        "teaser": "/assets/images/foo-bar-identity-th.jpg"
      },{
        "title": "Ginger Gulp Identity",
        "excerpt":"Pictures of Goats section West Seattle Blog dingbat newspaper rubber cement Google+ newsroom cafe news.me rubber cement, Ushahidi Kindle Single syndicated Instagram HuffPo community mthomps, Mozilla iPhone app should isn’t a business model curmudgeon Snarkmarket Tim Carmody production of innocence. Fuego tweets community DocumentCloud metered model Gardening &amp; War section...","categories": [],
        "tags": [],
        "url": "/portfolio/ginger-gulp-identity/",
        "teaser": "/assets/images/unsplash-gallery-image-3-th.jpg"
      },{
        "title": "Edge Case: Nested and Mixed Lists",
        "excerpt":"Nested and mixed lists are an interesting beast. It’s a corner case to make sure that Lists within lists do not break the ordered list numbering order Your list styles go deep enough. Ordered – Unordered – Ordered ordered item ordered item unordered unordered ordered item ordered item ordered item...","categories": ["Edge Case"],
        "tags": ["content","css","edge case","lists","markup"],
        "url": "/edge%20case/edge-case-nested-and-mixed-lists/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Edge Case: Many Tags",
        "excerpt":"This post has many tags.  ","categories": ["Edge Case"],
        "tags": ["8BIT","alignment","Articles","captions","categories","chat","comments","content","css","dowork","edge case","embeds","excerpt","Fail","featured image","FTW","Fun","gallery","html","image","Jekyll","layout","link","Love","markup","Mothership","Must Read","Nailed It","Pictures","Post Formats","quote","standard","Success","Swagger","Tags","template","title","twitter","Unseen","video","YouTube"],
        "url": "/edge%20case/edge-case-many-tags/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Edge Case: Many Categories",
        "excerpt":"This post has many categories.  ","categories": ["aciform","antiquarianism","arrangement","asmodeus","broder","buying","championship","chastening","disinclination","disinfection","dispatch","echappee","enphagy"],
        "tags": ["categories","edge case"],
        "url": "/aciform/antiquarianism/arrangement/asmodeus/broder/buying/championship/chastening/disinclination/disinfection/dispatch/echappee/enphagy/edge-case-many-categories/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Edge Case: No Body Content",
        "excerpt":" ","categories": ["Edge Case"],
        "tags": ["content","edge case","layout"],
        "url": "/edge%20case/edge-case-no-body-content/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Edge Case No Yaml Title",
        "excerpt":"This post has no title specified in the YAML Front Matter. Jekyll should auto-generate a title from the filename.  ","categories": ["Edge Case"],
        "tags": ["edge case","layout","title"],
        "url": "/edge%20case/edge-case-no-yaml-title/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Edge Case: Post with multiline excerpt",
        "excerpt":"Et ex ullamco duis don’t combine these words quis laborum sunt sint. Nisi et Lorem reprehenderit cupidatat. Aliqua fugiat aliquip officia culpa elit. Adipisicing do eu duis aute et aute amet anim ut cillum aliqua. Aliqua adipisicing occaecat et ullamco fugiat.  ","categories": [],
        "tags": [],
        "url": "/edge-case-multiline-excerpt/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Antidisestablishmentarianism",
        "excerpt":"Title should not overflow the content area A few things to check for: Non-breaking text in the title, content, and comments should have no adverse effects on layout or functionality. Check the browser window / tab title. If you are a theme developer, check that this text does not break...","categories": ["Edge Case"],
        "tags": ["content","css","edge case","html","layout","title"],
        "url": "/edge%20case/edge-case-title-should-not-overflow-the-content-area/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Suspicio? Bene ... tunc ibimus? Quis uh ... CONEXUS locus his diebus? Quisque semper aliquid videtur, in volutpat mauris. Nolo enim dicere. Vobis neque ab aliis. Ego feci memetipsum explicans. Gus mortuus est. Lorem opus habeo. Jackson Isai? Tu quoque ... A te quidem a ante. Vos scitis quod blinking res Ive 'been vocans super vos? Et conteram illud, et conteram hoc. Maledicant druggie excors. Iam hoc tu facere conatus sum ad te in omni tempore? Ludum mutavit. Verbum est ex. Et ... sunt occid",
        "excerpt":"Check for long titles and how they might break a template.  ","categories": ["Edge Case"],
        "tags": ["content","css","edge case","html","layout","title"],
        "url": "/edge%20case/edge-case-very-long-title/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Post: Modified Date",
        "excerpt":"This post has been updated and should show a modified date if used in a layout. All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was this. One day when she was two years old she was playing in a...","categories": ["Post Formats"],
        "tags": ["Post Formats","readability","standard"],
        "url": "/post%20formats/post-modified/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Post: Standard",
        "excerpt":"All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was this. One day when she was two years old she was playing in a garden, and she plucked another flower and ran with it to her mother. I suppose she...","categories": ["Post Formats"],
        "tags": ["Post Formats","readability","standard"],
        "url": "/post%20formats/post-standard/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Post: Chat",
        "excerpt":"Abbott: Strange as it may seem, they give ball players nowadays very peculiar names. Costello: Funny names? Abbott: Nicknames, nicknames. Now, on the St. Louis team we have Who’s on first, What’s on second, I Don’t Know is on third– Costello: That’s what I want to find out. I want...","categories": ["Post Formats"],
        "tags": ["chat","Post Formats"],
        "url": "/post%20formats/post-chat/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Post: Notice",
        "excerpt":"A notice displays information that explains nearby content. Often used to call attention to a particular detail. When using Kramdown {: .notice} can be added after a sentence to assign the .notice to the &lt;p&gt;&lt;/p&gt; element. Changes in Service: We just updated our privacy policy here to better service our...","categories": ["Post Formats"],
        "tags": ["Post Formats","notice"],
        "url": "/post%20formats/post-notice/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Post: Quote",
        "excerpt":"   Only one thing is impossible for God: To find any sense in any copyright law on the planet.       Mark Twain   ","categories": ["Post Formats"],
        "tags": ["Post Formats","quote"],
        "url": "/post%20formats/post-quote/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Post: Link",
        "excerpt":"This theme supports link posts, made famous by John Gruber. To use, just add link: http://url-you-want-linked to the post’s YAML front matter and you’re done.      And this is how a quote looks.    Some link can also be shown.  ","categories": ["Post Formats"],
        "tags": ["link","Post Formats"],
        "url": "/post%20formats/post-link/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Post: Video (YouTube)",
        "excerpt":"YouTube video embed below.    ","categories": ["Post Formats"],
        "tags": ["Post Formats"],
        "url": "/post%20formats/post-video-youtube/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Post: Header Image with OpenGraph Override",
        "excerpt":"This post has a header image with an OpenGraph override.   header:   image: /assets/images/page-header-image.png   og_image: /assets/images/page-header-og-image.png  ","categories": ["Layout","Uncategorized"],
        "tags": ["edge case","image","layout"],
        "url": "/layout/uncategorized/post-header-image-og-override/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Post: Overlay Image with OpenGraph Override",
        "excerpt":"This post has a header image with an OpenGraph override.   header:   overlay_image: /assets/images/unsplash-image-1.jpg   og_image: /assets/images/page-header-og-image.png   caption: \"Photo credit: [**Unsplash**](https://unsplash.com)\"   actions:     - label: \"Learn more\"       url: \"https://unsplash.com\"  ","categories": ["Layout","Uncategorized"],
        "tags": ["edge case","image","layout"],
        "url": "/layout/uncategorized/post-header-overlay-image-og-override/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Post: Image (with Link)",
        "excerpt":"  ","categories": ["Post Formats"],
        "tags": ["image","Post Formats"],
        "url": "/post%20formats/post-image-linked/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Post: Image (Standard)",
        "excerpt":"The preferred way of using images is placing them in the /assets/images/ directory and referencing them with an absolute path. Prepending the filename with {{ site.url }}{{ site.baseurl }}/assets/images/ will make sure your images display properly in feeds and such. Standard image with no width modifier classes applied. HTML: &lt;img...","categories": ["Post Formats"],
        "tags": ["image","Post Formats"],
        "url": "/post%20formats/post-image-standard/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Post: Teaser Image with OpenGraph Override",
        "excerpt":"This post has a teaser image with an OpenGraph override.   header:   teaser: /assets/images/page-header-teaser.png   og_image: /assets/images/page-header-og-image.png  ","categories": ["Layout","Uncategorized"],
        "tags": ["edge case","image","layout"],
        "url": "/layout/uncategorized/post-teaser-image-og-override/",
        "teaser": "/assets/images/page-header-teaser.png"
      },{
        "title": "Post: Image (Linked with Caption)",
        "excerpt":"          Image with a caption.   ","categories": ["Post Formats"],
        "tags": ["image","Post Formats"],
        "url": "/post%20formats/post-image-linked-caption/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Post: Image (Caption)",
        "excerpt":"         Photo from Unsplash.  ","categories": ["Post Formats"],
        "tags": ["image","Post Formats"],
        "url": "/post%20formats/post-image-caption/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Post: Gallery",
        "excerpt":"These are gallery tests for image wrapped in &lt;figure&gt; elements. To place a gallery add the necessary YAML Front Matter: gallery: - url: /assets/images/unsplash-gallery-image-1.jpg image_path: /assets/images/unsplash-gallery-image-1-th.jpg alt: \"placeholder image 1\" title: \"Image 1 title caption\" - url: /assets/images/unsplash-gallery-image-2.jpg image_path: /assets/images/unsplash-gallery-image-2-th.jpg alt: \"placeholder image 2\" title: \"Image 2 title caption\" -...","categories": ["Post Formats"],
        "tags": ["gallery","Post Formats","tiled"],
        "url": "/post%20formats/post-gallery/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Post: Twitter Embed",
        "excerpt":"🎨 Finally got around to adding all my @procreateapp creations with time lapse videos https://t.co/1nNbkefC3L pic.twitter.com/gcNLJoJ0Gn &mdash; Michael Rose (@mmistakes) November 6, 2015   This post tests Twitter Embeds.  ","categories": ["Media"],
        "tags": ["content","embeds","media","twitter"],
        "url": "/media/post-twitter-embeds/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Comments Disabled",
        "excerpt":"This post has its comments disabled.   There should be no comment form.  ","categories": ["Layout","Uncategorized"],
        "tags": ["comments","layout"],
        "url": "/layout/uncategorized/layout-comments-disabled/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Comments Enabled",
        "excerpt":"This post should display comments if a provider is enabled.  ","categories": ["Layout","Uncategorized"],
        "tags": ["comments","layout"],
        "url": "/layout/uncategorized/layout-comments/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Post Date Disabled",
        "excerpt":"This post has the date disabled. The date this post was published should not be showing if show_date: false is set in _config.yml or in this post’s YAML Front Matter. If you could keep awake (but of course you can’t) you would see your own mother doing this, and you...","categories": [],
        "tags": ["post date"],
        "url": "/layout-post-date-disabled/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Post Date Enabled",
        "excerpt":"This post has post date enabled. The date the post was published should show if show_date: true is added to it’s YAML Front Matter or as a default in _config.yml. If you could keep awake (but of course you can’t) you would see your own mother doing this, and you...","categories": [],
        "tags": ["post date"],
        "url": "/layout-post-date/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Read Time Disabled",
        "excerpt":"This post has reading time disabled. The estimated time that it takes to read this post should not be showing if read_time: false is set in _config.yml or in this post’s YAML Front Matter. If you could keep awake (but of course you can’t) you would see your own mother...","categories": [],
        "tags": ["read time"],
        "url": "/layout-read-time-disabled/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Read Time Enabled",
        "excerpt":"This post has reading time enabled. The estimated time that it takes to read this post should show if also enabled in _config.yml with read_time: true. If you could keep awake (but of course you can’t) you would see your own mother doing this, and you would find it very...","categories": [],
        "tags": ["read time"],
        "url": "/layout-read-time/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Related Posts Disabled",
        "excerpt":"This post has related posts disabled.   Related post links should not appear.  ","categories": ["Layout","Uncategorized"],
        "tags": ["related posts","layout"],
        "url": "/layout/uncategorized/layout-related-posts-disabled/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Related Posts Enabled",
        "excerpt":"This post has related posts enabled.  ","categories": ["Layout","Uncategorized"],
        "tags": ["related posts","layout"],
        "url": "/layout/uncategorized/layout-related-posts/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Social Sharing Links Disabled",
        "excerpt":"This post has social sharing disabled.   Social sharing links should not appear.  ","categories": ["Layout","Uncategorized"],
        "tags": ["social","layout"],
        "url": "/layout/uncategorized/layout-sharing-disabled/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Social Sharing Links Enabled",
        "excerpt":"This post should display social sharing links.  ","categories": ["Layout","Uncategorized"],
        "tags": ["social","layout"],
        "url": "/layout/uncategorized/layout-sharing/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Reading Time, Comments, Social Sharing Links, and Related Posts Disabled",
        "excerpt":"This post has reading time, comments, social sharing links, and related posts disabled.   Reading time, comments, social sharing and related post links should not appear.  ","categories": ["Layout","Uncategorized"],
        "tags": ["related posts","social","comments","layout"],
        "url": "/layout/uncategorized/layout-read-time-comments-sharing-related-posts-disabled/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Post with Nested Table of Contents via Helper",
        "excerpt":"Tests table of contents with multiple levels to verify indentation is readible via helper include (deprecated). {% include toc %} Enim laboris id ea elit elit deserunt 2 Sit adipisicing tempor duis velit cupidatat occaecat do amet 2.1 Ex et quis exercitation fugiat excepteur eiusmod mollit consequat id pariatur non...","categories": [],
        "tags": ["table of contents"],
        "url": "/layout-table-of-contents-include-post/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Post with Nested Table of Contents",
        "excerpt":"Tests table of contents with multiple levels to verify indentation is readible. Enim laboris id ea elit elit deserunt Magna incididunt elit id enim nisi quis excepteur reprehenderit Lorem dolore dolore ad enim. Labore esse elit excepteur et elit dolor. Elit ut consectetur labore velit elit esse voluptate id commodo....","categories": [],
        "tags": ["table of contents"],
        "url": "/layout-table-of-contents-indent-post/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Post with Table of Contents",
        "excerpt":"Enable table of contents on post or page by adding toc: true to its YAML Front Matter. The title and icon can also be changed with: --- toc: true toc_label: \"Unique Title\" toc_icon: \"heart\" # corresponding Font Awesome icon name (without fa prefix) --- HTML Elements Below is just about...","categories": [],
        "tags": ["table of contents"],
        "url": "/layout-table-of-contents-post/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Post with Sticky Table of Contents",
        "excerpt":"“Stick” table of contents to the top of a page by adding toc_sticky: true to its YAML Front Matter. --- toc: true toc_sticky: true --- HTML Elements Below is just about everything you’ll need to style in the theme. Check the source code to see the many embedded elements within...","categories": [],
        "tags": ["table of contents"],
        "url": "/layout-table-of-contents-sticky/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Code Excerpt (Generated)",
        "excerpt":"This is the post content with inline code, (e.g. &lt;span style=\"color: red;\"&gt;red&lt;/span&gt;. It should be displayed in place of the auto-generated excerpt in single-page views. Archive-index pages should display an auto-generated excerpt of this content. Be sure to test the formatting of the auto-generated excerpt, to ensure that it doesn’t...","categories": ["Layout","Uncategorized"],
        "tags": ["content","excerpt","layout"],
        "url": "/layout/uncategorized/layout-code-excerpt-generated/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Excerpt (Defined)",
        "excerpt":"This is the post content. It should be displayed in place of the user-defined excerpt in archive-index pages.   This paragraph should be absent from an archive-index page where post.excerpt is shown.  ","categories": ["Layout","Uncategorized"],
        "tags": ["content","excerpt","layout"],
        "url": "/layout/uncategorized/layout-excerpt-defined/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Excerpt (Generated)",
        "excerpt":"This is the post content. Archive-index pages should display an auto-generated excerpt of this content.     Be sure to test the formatting of the auto-generated excerpt, to ensure that it doesn’t create any layout problems.  ","categories": ["Layout","Uncategorized"],
        "tags": ["content","excerpt","layout"],
        "url": "/layout/uncategorized/layout-excerpt-generated/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Author Override",
        "excerpt":"Sites that may have content authored from various individuals can be accommodated by using data files. To attribute an author to a post or page that is different from the site author specified in _config.yml: Step 1. Create _data/authors.yml and add authors using the following format. Anything variables found under...","categories": [],
        "tags": [],
        "url": "/layout-author-override/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Author Sidebar Disabled",
        "excerpt":"This post has the author sidebar disabled.   To disable add author_profile: false to YAML Front Matter.  ","categories": [],
        "tags": [],
        "url": "/layout-author-sidebar-disabled/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Header Image (External URL)",
        "excerpt":"This post should display a header image, if the theme supports it.   Featured image is an external asset and should load.  ","categories": ["Layout","Uncategorized"],
        "tags": ["edge case","featured image","image","layout"],
        "url": "/layout/uncategorized/layout-header-image-external/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Header Image (Horizontal)",
        "excerpt":"This post should display a header image, if the theme supports it.   Non-square images can provide some unique styling issues.   This post tests a horizontal header image.  ","categories": ["Layout","Uncategorized"],
        "tags": ["edge case","featured image","image","layout"],
        "url": "/layout/uncategorized/layout-header-image-horizontal/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Header Image and Text Readability",
        "excerpt":"This is a sample post with a large feature image1 up top and tons of text. Odio ad blue bottle vinyl, 90’s narwhal commodo bitters pour-over nostrud. Ugh est hashtag in, fingerstache adipisicing laboris esse Pinterest shabby chic Portland. Shoreditch bicycle rights anim, flexitarian laboris put a bird on it...","categories": [],
        "tags": ["sample post","readability","test"],
        "url": "/layout-header-image-text-readability/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Header Image (Vertical)",
        "excerpt":"This post should display a header image, if the theme supports it.   Non-square images can provide some unique styling issues.   This post tests a vertical header image.  ","categories": ["Layout","Uncategorized"],
        "tags": ["edge case","featured image","image","layout"],
        "url": "/layout/uncategorized/layout-header-image-vertical/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Header Overlay with Background Fill",
        "excerpt":"This post should display a header with a solid background color, if the theme supports it.   Non-square images can provide some unique styling issues.   This post tests overlay headers.  ","categories": ["Layout","Uncategorized"],
        "tags": ["edge case","image","layout"],
        "url": "/layout/uncategorized/layout-header-overlay-color/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Header Image Overlay with Custom Tagline",
        "excerpt":"This post should display a header with an overlay image and custom tagline, if the theme supports it. Non-square images can provide some unique styling issues. This post tests overlay header images with custom page.tagline. tagline: \"This is a custom tagline content which overrides the default page excerpt.\" header: overlay_image:...","categories": ["Layout","Uncategorized"],
        "tags": ["edge case","image","layout"],
        "url": "/layout/uncategorized/layout-header-overlay-image-tagline/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Header Image Overlay",
        "excerpt":"This post should display a header with an overlay image, if the theme supports it. Non-square images can provide some unique styling issues. This post tests overlay header images. Overlay filter You can use it by specifying the opacity (between 0 and 1) of a black overlay like so: excerpt:...","categories": ["Layout","Uncategorized"],
        "tags": ["edge case","image","layout"],
        "url": "/layout/uncategorized/layout-header-overlay-image/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: More Tag",
        "excerpt":"This content is before the excerpt separator tag.   Additional content before the more tag.     And this content is after the more tag.  ","categories": ["Layout","Uncategorized"],
        "tags": ["content","read more","layout"],
        "url": "/layout/uncategorized/layout-more-tag/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Sidebar Custom",
        "excerpt":"This post has a custom sidebar set in the post’s YAML Front Matter.   An example of how that YAML could look is:   sidebar:   - title: \"Title\"     image: \"/assets/images/your-image.jpg\"     image_alt: \"image\"     text: \"Some text here.\"   - title: \"Another Title\"     text: \"More text here.\"     nav: sidebar-sample  ","categories": [],
        "tags": [],
        "url": "/layout-sidebar-custom/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Sidebar with Navigation List",
        "excerpt":"This post has a custom navigation list set in the post’s YAML Front Matter. sidebar: title: \"Sample Title\" nav: sidebar-sample Along with navigation elements set in _data/navigation.yml. sidebar-sample: - title: \"Parent Page A\" children: - title: \"Child Page A1\" url: / - title: \"Child Page A2\" url: / - title:...","categories": [],
        "tags": [],
        "url": "/layout-sidebar-nav-list/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Wide Single Layout Page",
        "excerpt":"When using layout: single add the following front matter to a page or post to widen the main content: classes: wide Portland in shoreditch Vice, labore typewriter pariatur hoodie fap sartorial Austin. Pinterest literally occupy Schlitz forage. Odio ad blue bottle vinyl, 90’s narwhal commodo bitters pour-over nostrud. Ugh est...","categories": [],
        "tags": ["sample post","readability","test"],
        "url": "/markup-text-readability-wide-page/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Markup: Text Readability Test",
        "excerpt":"Portland in shoreditch Vice, labore typewriter pariatur hoodie fap sartorial Austin. Pinterest literally occupy Schlitz forage. Odio ad blue bottle vinyl, 90’s narwhal commodo bitters pour-over nostrud. Ugh est hashtag in, fingerstache adipisicing laboris esse Pinterest shabby chic Portland. Shoreditch bicycle rights anim, flexitarian laboris put a bird on it...","categories": [],
        "tags": ["sample post","readability","test"],
        "url": "/markup-text-readability/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Markup: Title *with* **Markdown**",
        "excerpt":"Verify that:      The post title renders the word “with” in italics and the word “Markdown” in bold.   The post title markup should be removed from the browser window / tab.  ","categories": ["Markdown"],
        "tags": ["css","html","title"],
        "url": "/markdown/markup-title-with-markup/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Markup: Title with Special&nbsp;---&nbsp;Characters",
        "excerpt":"Putting special characters in the title should have no adverse effect on the layout or functionality. Special characters in the post title have been known to cause issues with JavaScript and XML when not properly encoded and escaped. Latin Character Tests This is a test to see if the fonts...","categories": ["Markup"],
        "tags": ["html","markup","post","title"],
        "url": "/markup/markup-title-with-special-characters/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Markup: Text Alignment",
        "excerpt":"Default This is a paragraph. It should not have any alignment of any kind. It should just flow like you would normally expect. Nothing fancy. Just straight up text, free flowing, with love. Completely neutral and not picking a side or sitting on the fence. It just is. It just...","categories": ["Markup"],
        "tags": ["alignment","content","css","markup"],
        "url": "/markup/markup-text-alignment/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Markup: Image Alignment",
        "excerpt":"Welcome to image alignment! The best way to demonstrate the ebb and flow of the various image positioning options is to nestle them snuggly among an ocean of words. Grab a paddle and let’s get started. The image above happens to be centered. The rest of this paragraph is filler for...","categories": ["Markup"],
        "tags": ["alignment","captions","content","css","image","markup"],
        "url": "/markup/markup-image-alignment/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Markup: HTML Tags and Formatting",
        "excerpt":"A variety of common markup showing how the theme styles them. Header two Header three Header four Header five Header six Blockquotes Single line blockquote: Stay hungry. Stay foolish. Multi line blockquote with a cite reference: People think focus means saying yes to the thing you’ve got to focus on....","categories": ["Markup"],
        "tags": ["content","css","formatting","html","markup"],
        "url": "/markup/markup-html-tags-and-formatting/",
        "teaser": "/assets/images/markup-syntax-highlighting-teaser.jpg"
      },{
        "title": "Markup: Another Post with Images",
        "excerpt":"Here are some examples of what a post with images might look like. If you want to display two or three images next to each other responsively use figure with the appropriate class. Each instance of figure is auto-numbered and displayed in the caption. Figures (for images or video) One...","categories": [],
        "tags": ["sample post","images","test"],
        "url": "/markup-more-images/",
        "teaser": "http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_c.jpg"
      },{
        "title": "Markup: Syntax Highlighting",
        "excerpt":"Syntax highlighting is a feature that displays source code, in different colors and fonts according to the category of terms. This feature facilitates writing in a structured language such as a programming language or a markup language as both structures and syntax errors are visually distinct. Highlighting does not affect...","categories": [],
        "tags": ["code","syntax highlighting"],
        "url": "/markup-syntax-highlighting/",
        "teaser": "/assets/images/markup-syntax-highlighting-teaser.jpg"
      },{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": ["Jekyll"],
        "tags": ["update"],
        "url": "/jekyll/welcome-to-jekyll/",
        "teaser": "/assets/images/500x300.png"
      },{
        "title": "Gemified Theme -- Alpha Release",
        "excerpt":"Jekyll themes distributed as Ruby gems are finally here to make installing and upgrading much easier. Gone are the days of forking a repo just to “install it”. Or dealing with merge conflicts when pulling in upstream commits to “upgrade it”. If you’re interested in testing out Minimal Mistakes as...","categories": ["Jekyll"],
        "tags": ["update"],
        "url": "/jekyll/gemified-theme-alpha/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Gemified Theme -- Beta Release",
        "excerpt":"Hot on the heels of Jekyll v3.3.0 is a beta release of Minimal Mistakes… as a gemified theme. minimal-mistakes-jekyll can only be used with Jekyll proper. If you’re hosting on GitHub Pages or using that gem the theme won’t work. 3rd party themes haven’t been white-listed so it’s a no...","categories": ["Jekyll"],
        "tags": ["update"],
        "url": "/jekyll/gemified-theme-beta/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Layout: Header Video",
        "excerpt":"This post should display a header with a responsive video, if the theme supports it. Settings Parameter Required Description id Required ID of the video provider Required Hosting provider of the video, either youtube or vimeo YouTube To embed the following YouTube video at url https://www.youtube.com/watch?v=XsxDH4HcOWA (long version) or https://youtu.be/XsxDH4HcOWA...","categories": ["Layout","Uncategorized"],
        "tags": ["video","layout"],
        "url": "/layout/uncategorized/layout-header-video/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Brilliant.org: Spherical Geometry",
        "excerpt":"I’m quite the avid proponent of Brilliant.org. It’s a great way to refine, build, and practice new mathematical concepts. I’m going to do a series of Brillant posts, one every week, on a very specific topic in math. This week, and post number 1, is spherical geometry. If you want...","categories": [],
        "tags": ["Math","Geometry","Linear Algebra"],
        "url": "/brilliant-spherical-geometry/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Brilliant.org: Euler's Totient Function",
        "excerpt":"Number theory is a very interesting field of mathematics I’ve only recently became interested in. This week it looks like Euler’s Totient Function will be the topic, as always you can follow along at the wiki. Euler’s Totient Functions (also called the Phi function) counts the number of positive integers...","categories": [],
        "tags": ["Math","Modular Arithmetic"],
        "url": "/brilliant-eulers-totient-function/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Chocolate Chip Cookies",
        "excerpt":"A chocolate chip cookie is a drop cookie that originated in the United States and features chocolate chips as its distinguishing ingredient. The traditional recipe combines a dough composed of butter and both brown and white sugar with semi-sweet chocolate chips. Variations include recipes with other types of chocolate as...","categories": [],
        "tags": [],
        "url": "/recipes/chocolate-chip-cookies/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Oatmeal Cookies",
        "excerpt":"Oatmeal cookies are a proverbial favorite with both kids and adults. This crisp and chewy cookie is loaded with oats, dried fruit, and chopped nuts. Ingredients 1 cup butter, softened 1 cup white sugar 1 cup packed brown sugar 2 eggs 1 teaspoon vanilla extract 2 cups all-purpose flour 1...","categories": [],
        "tags": [],
        "url": "/recipes/oatmeal-cookies/",
        "teaser": "/assets/images/default.jpg"
      },{
        "title": "Peanut Butter Cookies",
        "excerpt":"A peanut butter cookie is a type of cookie that is distinguished for having peanut butter as a principal ingredient. The cookie generally originated in the United States, its development dating back to the 1910s. Ingredients 1 cup unsalted butter 1 cup crunchy peanut butter 1 cup white sugar 1...","categories": [],
        "tags": [],
        "url": "/recipes/peanut-butter-cookies/",
        "teaser": "/assets/images/default.jpg"
      }]
