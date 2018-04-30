## TS

[Starter example from TS site](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)
[Blog post on HOCs](https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb)

You may be wondering why object rest/spread is not being used here, despite TypeScript supporting it since version 2.1. This is the first gotcha, and the reason for this is that TypeScript has some object rest/spread issues with React which are currently being addressed in a long-standing pull request. You will also face this same issue if you want to destructure the props using object rest:

[Problems with spread](https://github.com/Microsoft/TypeScript/pull/13288)

This is a known issue that is unlikely to be fixed, and is due to the fact the compiler cannot differentiate between JSX and generics in .tsx files in this scenario. There are a couple of workarounds though, one being to replace the fat arrow function with a function declaration (as mentioned in the Github issue), or another more hacky fix is to change the generic to `<P extends object>`.
[Problem with generics](https://github.com/Microsoft/TypeScript/issues/15713), which points to another [open PR](https://github.com/Thom1729/Sublime-JS-Custom/issues/28)

The majority of typings for libraries which use HOCs use this approach or something similar, which forces the consumer to be more explicit about the types they’d like to use with it, and the issues with not specifying the types can be easily missed until the wrapped component is used.

## Flow

[HOCs with Flow](https://flow.org/en/docs/react/hoc/)

### Begin

#### First hiccup

```
Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ node_modules/config-chain/test/broken.json:11:3

Unexpected string

      8│     "url": "https://github.com/dominictarr/config-chain.git"
      9│   }
     10│   //missing , and then this comment. this json is intensionally invalid
     11│   "dependencies": {
     12│     "proto-list": "1",
     13│     "ini": "~1.0.2"
     14│   },
```

##### Solution

```
[ignore]
.*/node_modules/config-chain/*
```

## Comparisons

[James Kyle's post comparing on-boarding process](https://jamie.build/adopting-flow-and-typescript.html)

## Code editors

### Generics
