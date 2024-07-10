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
        name: "MicrosoftEntraIDSAML",
        metadata: {
          metadataContent: "https://crm-sandbox.s3.us-east-2.amazonaws.com/metadata.xml?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIHT8F4MH4quGfaKutf33CW9ypDoF5oLOSejrDTNI9%2FhGAiEAqk31RX1j1xm6Xwf646cY96HDl1ug83slJVpxxRaqFoYq5QMITBAAGgw4ODk5MTc5MzI4NzciDA5WwMwVDQXZ%2FCSmWirCA1FMexsqOpxdzmWDPovuDNpKtTu1JKc7nueZX%2F3Z%2FEBsj6EhQvXqfxddedH2dZmf9p94vNpFmzm%2F0Tz%2BBX0Oo9ZC%2Broi%2FRYM1S31%2FpvYqxfxrxBT798XqC8Hlk5EC0Fs6QOIr4g16VblQIDnHM8i13RzKRZTrxt%2BG0iB8rgnbzy2yghDuJ5%2BDXPwNEK6x7fILiatfSZA2igHCpEboDA2DExuCZg4uF38H%2Bp6t1hfgaSq80EHDmCpdbTqZQYf%2FwIr9KLWDz8e%2FYBbIakkaaPx2xIhXnTZs%2F5HKUXTeg8nam%2Frgyg2Md1sJ0yNQJw5CWcdpLt0AHn0yuUzUhxaEI7NKyKcWUeDwtnT5%2BHgFmVJHKcw1jr2qljzeRcMFgfGNfMR4k8ydb5jzuqdNLXmW3G1ewpjthEzH2NvF3weJLrBElduot1322aiBv8BiZFKimIB4gxz2xF7rQdJuZb31q2Kz2EFRg26zvSjl3Rute4Ma%2B07UE6Fh1VqXiXTD5PLImfcLWiakvo3Pq10JrCdQ0XmEYtFkjJDSQNTwjf%2Bbv4jumnhrP85SJHXaM6Sq8%2F7EaL9hVhzFuIQhmLZmjVGWv5nzmv%2FkzCht7u0BjqUAsmJmJTGhhVmfEoe5k3d%2BkQe2ifQcXlDdqJ1nKC%2BZ7A9xvW6HrVzOyu8dFG14MHuqvJ00N0HPBotQnnk4AIrPzJk2s8vGeR3qAZI8Ha4D92aoPSCqZKiLQxqHHcRHoJrGZd4ydL2%2F5zAzVqo33rDp4tPSEpV1GwbLtqHx5P08MQwhv6i%2FwP7Ut%2BH%2BQVKsik33abQi4CKbhXrTTeI9eHDI2JFvdF6JYyrn26f7iG0BYEDWKqX8yprdQe5nnngUl0AapdzTTaifoySn54wxm0dPqyxZVt2wWjU94ZOCcRNds9Z98qBJgh7GOYd6yLQeoxXMitD4Fcaimr3IKZS%2FEELmXAef0FHBAgqrUPptzuD2teMj%2FPctA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240710T190935Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA46MZ6AVG7K2I24UY%2F20240710%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=34faeecf6da6081553fd3990f0406faed87a4d1b933f2325a4993183d9bf5e70", // or content of the metadata file
          metadataType: "URL", // or 'FILE'
        },
      },
      logoutUrls: ["http://localhost:3000/", "https://mywebsite.com"],
      callbackUrls: [
        "http://localhost:3000/profile",
        "https://mywebsite.com/profile",
      ],
    },
  },
});
