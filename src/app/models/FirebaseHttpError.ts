export interface FirebaseHttpError {
  code?: number;
  errors: [{
    message: string;
    domain: string;
    reason: string;
  }];
  message: string;
}
