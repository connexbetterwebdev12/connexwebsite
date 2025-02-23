export const menuItemsData = [
    {
      title: 'Home',
      link:"/"
    },
    {
      title: 'Products',
       link:"#",
      submenu: [
        {
          title: 'SMS Gateway',
          link:"#",
          submenu: [
            {
              title: 'SMS API',
              link:"/SMSAPI"
            },
            {
              title: 'Bulk SMS',
              link:"/BulkSMS"
            },
            {
              title: 'International SMS',
              link:"/InternationalSMS"
            },
            {
              title: 'Two Factor Authentication',
              link:"/TwoFactorAuthentication"
            },
          ],
        },
        {
          title: 'RCS Messaging',
          link:"/RCS"
        },
        {
          title: 'WhatsApp API Pricing',
           link:"/Whatsapp"
        },
        {
          title: 'Bulk Email',
           link:"/Email"
        },
        {
          title: 'Voice Services',
          link:"#",

          submenu: [
            {
              title: 'Voice',
              link:"/Voice"
            },
            {
              title: 'IVR',
              link:"/IVR"
            },
            {
              title: 'Contact Center Solution',
              link:"/ContactCenter"
            },
            {
              title: 'Voice OBD',
              link:"/VoiceOBD"
            },
            {
              title: 'Call Masking',
              link:"/CallPatch"
            },
          ],
        },
      ],
    },
    {
      title: 'Pricing',
      submenu: [
        {
          title: 'Bulk SMS Pricing',
          link:"/SMSpricing"
        },
        {
          title: 'RCS Pricing',
           link:"/RCSpricing"
        },
        {
          title: 'WhatsApp API pricing',
           link:"/WhatsApppricing"
        },
        {
          title: 'Bulk Email Pricing',
           link:"/EmailPricing"
        },
        {
          title: 'Voice Pricing',
           link:"/Voicepricing"
        },
      ],
    },
    {
      title: 'About us',
     link:"#",
      submenu: [
        {
          title: 'About Company',
          link:"/About"
        },
        {
          title: 'Blog',
          link:"/Blog"
        },
        {
          title: 'Careers',
          link:"/Career"
        },
        {
          title: 'Contact us',
          link:"/Contact"
        },
        {
          title: 'Schedule Demo',
          link:"/ScheduleDemo"
        },
       
      ],
    },
  ];
  