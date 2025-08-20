%if not _FARETEK_INCLUDE_BUTTON_DETECTOR
%define _FARETEK_INCLUDE_BUTTON_DETECTOR

%include inflator/assert

costumes "inflator/button_detector/assets/add to studio.svg"         as "button_detector.gs//add to studio";
costumes "inflator/button_detector/assets/cancel comment.svg"        as "button_detector.gs//cancel comment";
costumes "inflator/button_detector/assets/copy link.svg"             as "button_detector.gs//copy link";
costumes "inflator/button_detector/assets/fave.svg"                  as "button_detector.gs//fave";
costumes "inflator/button_detector/assets/fullscreen.svg"            as "button_detector.gs//fullscreen";
costumes "inflator/button_detector/assets/green flag.svg"            as "button_detector.gs//green flag";
costumes "inflator/button_detector/assets/love.svg"                  as "button_detector.gs//love";
costumes "inflator/button_detector/assets/pfp.svg"                   as "button_detector.gs//pfp";
costumes "inflator/button_detector/assets/post comment.svg"          as "button_detector.gs//post comment";
costumes "inflator/button_detector/assets/remix.svg"                 as "button_detector.gs//remix";
costumes "inflator/button_detector/assets/see data.svg"              as "button_detector.gs//see data"; 
costumes "inflator/button_detector/assets/see inside.svg"            as "button_detector.gs//see inside";
costumes "inflator/button_detector/assets/stop button.svg"           as "button_detector.gs//stop button";

enum ScratchButtons {
    add_to_studio=  "add to studio",
    cancel_comment= "cancel comment",
    copy_link=      "copy link",
    fave=           "fave",
    fullscreen=     "fullscreen",
    green_flag=     "green flag",
    love=           "love",
    pfp=            "pfp",
    post_comment=   "post comment",
    remix=          "remix",
    see_data=       "see data",
    see_inside=     "see inside",
    stop_button=    "stop button",
    none
}

%define DETECT_BUTTON(name)                                                     \
    switch_costume "button_detector.gs//" & ScratchButtons.name;                \
    if touching("_mouse_") {                                                    \
        switch_costume og_cos;                                                  \
        return ScratchButtons.name;                                             \
    }

func button_detector() {
    # The button detector only works if you have the correct sprite position
    assert_eq x_position(), 0, "x_position(): ";
    assert_eq y_position(), 0, "y_position(): ";
    assert_eq size(), 100, "size(): ";
    assert_eq direction(), 90, "direction(): ";

    local og_cos = costume_number();
    DETECT_BUTTON(add_to_studio);
    DETECT_BUTTON(cancel_comment);
    DETECT_BUTTON(copy_link);
    DETECT_BUTTON(fave);
    DETECT_BUTTON(fullscreen);
    DETECT_BUTTON(green_flag);
    DETECT_BUTTON(love);
    DETECT_BUTTON(pfp);
    DETECT_BUTTON(post_comment);
    DETECT_BUTTON(remix);
    DETECT_BUTTON(see_data);
    DETECT_BUTTON(see_inside);
    DETECT_BUTTON(stop_button);

    switch_costume og_cos;
    return ScratchButtons.none;
}

%undef DETECT_BUTTON
%endif
