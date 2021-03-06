open Helpers;

[@react.component]
let make = (~message: option(string)=?) => {
  <div style={ReactDOMRe.Style.make(~fontSize="80px", ())}>
    {switch (message) {
     | None => "An error occured" |> text
     | Some(msg) => msg |> text
     }}
  </div>;
};
