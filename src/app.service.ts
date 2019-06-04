import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Updated!';
  }

  getListOfSomething(): string[] {
    return ['Hello', `I'm`, 'a list!'];
  }
}
