# Hugo Shortcode for embedding videos with a privacy warning

This is a Hugo shortcode that allows one to embed YouTube videos with user consent. The shortcode will defer embedding the videos on the page until the user clicks an accept button. The warning box is customisable through your website's config file. Although the shortcode currently supports YouTube embeds only, it can easily be extended to support other embeds. If you want to see another embed supported, please open an issue or submit a pull request.

<p align="center">
  <img src="repo_files/demo.gif">
</p>

## Disclaimer about GDPR compliance

This is *a personal project* for embedding videos on my website after user's
approval. I am *not* a solicitor and I have *no*
knowledge about GDPR law. I did *not* check this project with a solicitor
to see if it is complaint with these laws. This project simply attempts to defer
embedding of videos until the user consents with privacy policies by clicking
an accept button. If you are going to use this for your own personal
 or commercial site please do check with a solicitor for compliance. I
provide *no guarantees* that this is complaint with any law in any way.

## Installation

This repo at this point assumes that the site uses bootstrap. It uses bootstrap
CSS to format the warning and the shortcode in general. You can easily change
the formatting if you wish to match the aesthetics of your site.

Add the following lines in your config.toml:

```
[module]
[[module.imports]]
  path = 'github.com/rpapallas/hugo_gdpr_embeds'
```

Make sure that your Hugo site project is a module by running the
following lines:

```
hugo mod init github.com/YOUR_USERNAME/PROJECT_REPO_NAME
go mod tidy
```

Finally, make sure to add the following configuration in your site's config
file, for example for `config.toml`:

```toml
...

[params]
   [params.gdpr_embeds]
      myPrivacyPolicyText = 'Put your privacy text here, you can use markdown to link to your [privacy policy](/privacy) page.'
      [params.gdpr_embeds.youtube]
         warningTitle = 'This is the title of the warning box'
         warningMainText = """This is the warning text of the warning box.
         Here you need to explain the implications of watching a youtube video.
         You can use markdown to link to the [privacy policy](https://www.....) 
         of youtube."""
         buttonText = 'This is the text of the button the user will click to agree to show the videos'
```

Make sure you set the text above appropriately to clearly explain to your users
the implications of watching a video, your privacy policy etc.

Here is how this would look like:

![Example](repo_files/example.png)

## Usage

### YouTube

The way YouTube video embed is implemented is that the shortcode will pick up a
list of YouTube video IDs and load them into iframes. 

By default, the shortcode will append the ID to
`https://www.youtube-nocookie.com/embed/` which defers cookies until user
clicks the play button. 

To be extra cautious, the iframes are hidden and replaced with placeholder
images and the URL is added to the `data-src` attribute of the iframe instead
of the `src` which as a result will not load the videos automatically on page
load. Once the user consents by clicking on the button of the privacy warning
box, the shortcode will make the iframes visible and move the URL from the
`data-src` to the `src` attribute which will cause the videos to be loaded at
that time.


```md
{{% gdpr_embeds/youtube %}}
IAqByEb6wfo
tyHdtifvQz8
{{% /gdpr_embeds/youtube %}}
```


## Contributing

I have currently implemented this for YouTube but it can easily be extended
for other embeds. If you need something else and you spend the time/effort to
implement it, please consider opening a pull request and I would be happy
to merge.

This is also a quick project and there could be space for improvement. If you 
have feedback or want to improve it, please open a PR as well.
