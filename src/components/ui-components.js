import { R3MI_ADVANCED_BLOCKS } from "@utils/const";
import { Flex, FlexItem, Modal, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export const RangeControlWidget = ({
  label = "",
  value = "",
  icon = "",
  onChange = () => {},
  max = 25,
  min = 0,
}) => {
  return (
    <Flex align="flex-end" className="r3mi-flex-spacing" gap={2}>
      <FlexItem className="r3mi-flex-control">
        <RangeControl
          label={__(label, R3MI_ADVANCED_BLOCKS)}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          //__nextHasNoMarginBottom
        />
      </FlexItem>
      {icon && <FlexItem className="r3mi-flex-icon">{icon}</FlexItem>}
    </Flex>
  );
};

export const ModalWidget = ({ handleClose = () => {}, isOpen = false }) => {
  return (
    isOpen && (
      <Modal
        title="Gallery Settings"
        size="medium"
        onRequestClose={handleClose}
      >
        sadasdasd
      </Modal>
    )
  );
};
