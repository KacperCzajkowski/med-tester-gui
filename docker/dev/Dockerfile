FROM med-tester-gui-base as med-tester-gui-dev

RUN apk add bash

CMD npm ci && chmod -R 777 ./node_modules && ./node_modules/.bin/ng serve --host=0.0.0.0 --disableHostCheck
