costumes "blank.svg";

%include inflator/assert
%include inflator/button_detector

onflag {
    show result;
    forever {
        result = button_detector();
    }
}
