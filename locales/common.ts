export const common = {
  en: {
    title: "klabber",
    greet: "Hey, what sort of games are you looking for?",
    help: "If you need help...",
    helperTwo: "Try searching for something like...",
    suggestion: "What are good games made by valve in the early 2000s?",
    footer: "Currently in beta!",
    reset: "Let's try again",
    positive: "Yes",
    negative: "No",
    blurb:
      "Cupcake ipsum dolor sit amet. Cake donut marshmallow jelly lollipop tiramisu. Jujubes macaroon candy canes sweet bear claw tootsie roll pastry soufflé icing. Toffee gingerbread tootsie roll sugar plum donut cupcake gummies. ",
    feedback: "Find the games you needed?",
    explanationSummary: "Klabber was created to help point people to some games that suit their tastes. ",
    explanationExpansion:
      "One of the main focuses of Klabber was to keep the interface feeling conversational, like you were asking a friend about some really good game recommendations.",
    final: "Nice, hope you enjoy the game(s)!",
    resetGreet: "Welcome back! Try looking for another game",
    tips: [
      {
        message:
          "If you're having trouble finding games, don't worry! Service is still in early beta and is being trained all the time. ",
      },
      { message: "Try to add keywords klabber understands like 'good' or the name of a publisher like 'Valve'" },
    ],
  },
  pt: {
    title: "Find a game",
    greet: "Hi",
    help: "If you need help...",
    helperTwo: "try searching for something like...",
    suggestion: "what are good games made by valve in the early 2000s?",
    footer: "Currently in alpha!",
    reset: "Try again?",
    positive: "Yes",
    negative: "No",
    blurb:
      "Cupcake ipsum dolor sit amet. Cake donut marshmallow jelly lollipop tiramisu. Jujubes macaroon candy canes sweet bear claw tootsie roll pastry soufflé icing. Toffee gingerbread tootsie roll sugar plum donut cupcake gummies. ",
    explanationSummary: "Klabber was created to help point people to some games that suit their tastes. ",
    explanationExpansion:
      "One of the main focuses of Klabber was to keep the interface feeling conversational, like you were asking a friend about some really good game recommendations.",
    tips: [
      {
        message:
          "If you're having trouble finding games, don't worry! Service is still in early beta and is being trained all the time. ",
      },
      { message: "Try to add keywords klabber understands like 'good' or the name of a publisher like 'Valve'" },
    ],
    feedback: "Find the games you needed?",
    final: "Nice, hope you enjoy the game(s)!",
    resetGreet: "Welcome back! Try looking for another game",
  },
};

export type common = {
  en: Record<string, unknown>;
};
