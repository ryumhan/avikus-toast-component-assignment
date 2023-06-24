import { GlobalColor, TypoGraphy, Vertical } from "~/common/style";
import CommonToastButton from "~/common/components/common-toast-button";

import {
  ExampleContainer,
  ButtonGroupContainer,
  CustomWarningToast,
} from "./styled";

const Example = (): React.ReactElement => {
  return (
    <ExampleContainer>
      <Vertical gap="20px">
        <TypoGraphy type={"bold"} color={GlobalColor.black01} size={25}>
          Examples
        </TypoGraphy>

        {/* button list for Toast types */}
        <ButtonGroupContainer gap="20px">
          {/* Default Toast Button */}
          <CommonToastButton
            title={"Default"}
            toastProps={{ message: "This is Default message" }}
          />

          {/* Success Toast Button */}
          <CommonToastButton
            title={"Success"}
            toastProps={{
              variant: "success",
              message: "Successfully toasted!",
              duration: 5000,
            }}
          />

          {/* Custom Toast Button */}
          <CommonToastButton
            title={"Custom"}
            toastProps={{
              duration: 10000,
              render: () => (
                <CustomWarningToast>
                  <TypoGraphy
                    type={"bold"}
                    color={GlobalColor.warning}
                    size={18}
                  >
                    Custom Warning Message
                  </TypoGraphy>
                </CustomWarningToast>
              ),
            }}
          />
        </ButtonGroupContainer>
      </Vertical>
    </ExampleContainer>
  );
};

export default Example;
