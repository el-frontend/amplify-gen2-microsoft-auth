import { defineAuth } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      saml: {
        name: "MicrosoftEntra",
        metadata: {
          metadataContent: "./metadata.xml", // or content of the metadata file
          metadataType: "FILE", // or 'FILE'
        },
        attributeMapping: {
          email:
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
          familyName:
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname",
          fullname: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/displayname",
        },
      },
      logoutUrls: ["http://localhost:5173/"],
      callbackUrls: [
        "http://localhost:5173"
      ],
    },
  },
});
