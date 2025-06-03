<Head>
  <script
    async
    type="module"
    src="https://interfaces.zapier.com/assets/webcomponents/zapier-interfaces-chatbot/zapier-interfaces-chatbot.js"
  ></script>
</Head>

...

<div
  dangerouslySetInnerHTML={{
    __html: `
      <zapier-interfaces-chatbot-embed
        is-popup="true"
        chatbot-id="cmb9jx6am0ohq0z6z6mbe9aiw">
      </zapier-interfaces-chatbot-embed>
    `,
  }}
/>
      </ThemeProvider>
    </CacheProvider>
  );
}
