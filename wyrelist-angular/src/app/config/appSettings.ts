export class AppSettings {
  private static application:any = {
    serverUrl: "http://127.0.0.1:8000/api/",
    passwordLength: 4
  }

  private static google:any = {
    map: {
      key: "AIzaSyDuM08PJs00SK8Xyclb0DKaWz0_sMFtqwI"
    }
  }

  public static _fetch():any {
    return {
      appServer: {
        url: this.application.serverUrl,
        passwordLength:this.application.passwordLength
      },
      google: {
        map: {
          key: this.google.map.key
        }
      }

    }
  }
}

