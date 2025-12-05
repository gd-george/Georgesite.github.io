//code below loads consentManagerConfig object and specifies content popup contains. Need to update with your own writeKey and what container code should be injected to, I am using empyty div 

//note, may need to view demo in debug mode to save tracking preferences in browser


window.consentManagerConfig = function(exports) {
   //creating our custome category object
   var customCategories = {
          'Analytics': {
             integrations: ['Google Analytics','Mixpanel','Amplitude'], 
             purpose: 'Provide statistical information on site usage, e.g., web analytics so we can improve this website over time.'          
          },
          'Functional': {
            integrations: ['Salesforce Marketing Cloud','Visual Tagger'], 
            purpose: 'Enables enhanced functionality, such as videos and live chat. If you do not allow these, then some or all of these functions may not work properly.'    
          },
          'Do Not Sell': {
             integrations: ['Salesforce', 'MailChimp', 'AdWords'], 
             purpose:'To give the right to opt out of the sale of personal data.'
          }
      }; 
  
   
  //this will set which category of tools are opted in/out of by default
    var initialPrefs = {
        'Functional': true,
        'Analytics': false,
        'Do Not Sell': false }; 
  
         var prefs = {
          
          container: '#target-container', 
          //passing in our customCategories object to consentManagerConfig
          customCategories: customCategories,
          //passing in our initial preferences object to consentManagerConfig
          initialPreferences: initialPrefs, 
          writeKey: 'HwhLoZh1fCtwAiGxp2HWvK7oOkhdLBSF',
          bannerContent: 'User consent is awesome! We use cookies (and other similar technologies) to collect data to improve your experience on our site.',
          bannerSubContent: 'You can change your preferences at any time.',
          cancelDialogContent: 'Your preferences have not been saved. By continuing to use our website, you are agreeing to our Website Data Collection Policy',
          cancelDialogTitle: 'Are you sure you want to cancel?',
          closeBehavior: 'accept',
          implyConsentOnInteraction: false,
          preferencesDialogContent: 'We use data collected by cookies and JavaScript libraries, which are necessary for website functioning, to improve user’s browsing experience, analyze site traffic, deliver personalized advertisements, and increase the overall performance of our site.',
          preferencesDialogTitle: 'Website Data Collection Preferences'
          
      }        
        return prefs; 
} 

</script>
<!--script that loads Prebuilt Consent Manager UI via Preact, note using version 5.0.0-->
 <script src="https://unpkg.com/@segment/consent-manager@5.0.0/standalone/consent-manager.js" defer> </script>


<!--Load Analytics.js-->
<script>
        !(function() {
          var analytics = (window.analytics = window.analytics || [])
          if (!analytics.initialize)
            if (analytics.invoked)
              window.console && console.error && console.error('Segment snippet included twice.')
            else {
              analytics.invoked = !0
              analytics.methods = [
                'trackSubmit',
                'trackClick',
                'trackLink',
                'trackForm',
                'pageview',
                'identify',
                'reset',
                'group',
                'track',
                'ready',
                'alias',
                'debug',
                'page',
                'once',
                'off',
                'on', 
                //methods below needed for consent manager version 5.0.0 and greater!!
                'addSourceMiddleware', 
                'addDestinationMiddleware'
              ]
              analytics.factory = function(t) {
                return function() {
                  var e = Array.prototype.slice.call(arguments)
                  e.unshift(t)
                  analytics.push(e)
                  return analytics
                }
              }
              for (var t = 0; t < analytics.methods.length; t++) {
                var e = analytics.methods[t]
                analytics[e] = analytics.factory(e)
              }
              analytics.load = function(t, e) {
                var n = document.createElement('script')
                n.type = 'text/javascript'
                n.async = !0
                n.src =
                  ('https:' === document.location.protocol ? 'https://' : 'http://') +
                  'cdn.segment.com/analytics.js/v1/' +
                  t +
                  '/analytics.min.js'
                var o = document.getElementsByTagName('script')[0]
                o.parentNode.insertBefore(n, o)
                analytics._loadOptions = e
              }
              analytics.SNIPPET_VERSION = '4.1.0'
              analytics.page()
            }
        })()
      </script>

<!--Javascript that controls form submits and mapping user input data to Segment Analytics.js methods-->
<script type="text/javascript">
    function identify(e){
      e.preventDefault();
      var form = e.target;
      var email = form["email"].value;
      var fullname = form["fullname"].value;
      var destination = form["destination"].value;
      var details = form["details"].value;
      var user = {
          email: email, 
          name: fullname, 
          destination: destination, 
          details: details
      };
      analytics.identify('1234', {
          email: email, 
          name: fullname
      });
      analytics.track('destination submitted', user, function() {
          window.location.href = "";
      });
      analytics.page('Home', user, {
        url: "/" 
      });
      analytics.alias('507f191e81');
      analytics.group("0e8c78ea9d97a7b8185e8632", {
            name: "Initech", 
            industry: "Technology",
            employees: 329, 
            plan: "enterprise", 
            "total billed": 830
            });
    }
