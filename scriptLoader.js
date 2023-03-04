        class ScriptLoader {
            constructor(scripts) {
              this.scripts = scripts;
            }
          
            async loadScripts() {
              for (const script of this.scripts) {
                await this.loadScript(script);
              }
            }
          
            async loadScript(script) {
              return new Promise((resolve, reject) => {
                const scriptElement = document.createElement('script');
                scriptElement.src = script.src;
                if (script.async) {
                  scriptElement.async = true;
                }
                if (script.defer) {
                  scriptElement.defer = true;
                }
                scriptElement.onload = resolve;
                scriptElement.onerror = reject;
                document.body.appendChild(scriptElement);
              });
            }
          }
          
          const scriptLoader = new ScriptLoader([
          { src: 'screenres.js', async: false, defer: false }
          { src: 'script2.js', async: true, defer: false },
          { src: 'script3.js', async: false, defer: true }
          ]);
          
          scriptLoader.loadScripts();                  
