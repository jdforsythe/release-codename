# release-codename
Node command-line tools to generate release codenames for software development

# Install

```sh
npm install -g release-codename
```

# Use

```sh
release-codename [options]
```

## Options

  - **--help** _show the options_
  - **--nodash** _show spaces instead of dashes between words_
  - **--words=_#_** _specify the number of words in the codename_
  - **--count=_#_** _specify the number of codenames to generate_
  - **--alliterative** _show alliterative codenames_
  - **--letter=b** _show alliterative codenames starting with a letter (no need to set `--alliterative` when using `--letter`)_
