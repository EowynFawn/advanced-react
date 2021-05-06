import Document, {Html, Head, NextScript, Main} from 'next/document';
import { render } from 'nprogress';

export default class MyDocument extends Document {} {
    render() {
        return (
        <Html lang="en-US">
          <body>
              <Main/>
              <NextScript />
          </body>
        </Html>
        );
    }
}
