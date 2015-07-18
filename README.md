# [ariya/phantomjs#13417](https://github.com/ariya/phantomjs/issues/13417)

When rendering a simple html file with `width` and `height` properties specified in `mm`, the size get's all wrong.

This is a simple test case.

## Usage

```bash
phantomjs test.js
```

## Output

![screen shot 2015-07-18 at 18 09 19](https://cloud.githubusercontent.com/assets/189580/8762401/37b0c160-2d78-11e5-8508-0a8ba5f5ffa8.png)

## Problem

There should be enough room to comfortable fit two boxes next to each other. An `A4` paper is 210mm x 297mm.

1.9.8 has a similar problem but it's a bit closer to being correct. Safari -> Print To Pdf renders it perfectly.
