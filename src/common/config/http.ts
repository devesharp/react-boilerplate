import { HttpService } from '@devesharp/react-utils';

HttpService.addErrorListener((e) => {
   console.log(e);
});
