import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

export class ErrorHandler {

  constructor(
    public router: Router
  ) { }

  handleStatusErrors(error: HttpErrorResponse): any {
    if (error.status == 401) {
      if (error.error != null) {
        const jsonMsgs = JSON.parse(error.error.message);
        if (jsonMsgs.msgs != null && jsonMsgs.msgs.length > 0) {
          const msgId = jsonMsgs.msgs[0].id;
          // display error message
        }
      }
    } else if (error.status == 404 || error.status == 500 || error.error != null) {
      this.router.navigate(['/errorPage'], { queryParams: { errorMsgNo: error.status } });
    }
    // return observableNever();
  }
}
