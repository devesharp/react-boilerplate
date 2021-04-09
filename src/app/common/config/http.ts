import { HttpService } from '@devesharp/react-utils';
import { store } from '~/app/store/store';
import { actionLogOut } from '~/app/store/modules/auth';

HttpService.addErrorListener((e) => {
   // code 3 = token inválido
   if (e.response?.data.data?.code === 3) {
      store.dispatch(actionLogOut());
   }
});
