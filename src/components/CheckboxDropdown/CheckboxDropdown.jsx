import { observer } from "mobx-react-lite";

import React from "react";
import "./styles.css";

import { Button, ButtonGroup, Dropdown, Form } from "react-bootstrap";

const CheckboxMenu = React.forwardRef(
  (
    {
      children,
      style,
      className,
      "aria-labelledby": labeledBy,
      onSelectAll,
      onSelectNone
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        style={style}
        className={`${className} CheckboxMenu`}
        aria-labelledby={labeledBy}
      >
        <div
          className="d-flex flex-column"
          style={{ maxHeight: "calc(100vh)", overflow: "none" }}
        >
          <ul
            className="list-unstyled flex-shrink mb-0"
            style={{ overflow: "auto" }}
          >
            {children}
          </ul>
          <div className="dropdown-item border-top pt-2 pb-0">
            <ButtonGroup size="sm">
              <Button variant="link" onClick={onSelectAll}>
                Select All
              </Button>
              <Button variant="link" onClick={onSelectNone}>
                Select None
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    );
  }
);

const CheckDropdownItem = React.forwardRef(
  ({ children, id, checked, onChange }, ref) => {
    return (
      <Form.Group ref={ref} className="dropdown-item mb-0" controlId={id}>
        <Form.Check
          type="checkbox"
          label={children}
          checked={checked}
          onChange={onChange && onChange.bind(onChange, id)}
        />
      </Form.Group>
    );
  }
);

export const CheckboxDropdown = observer(({ name,variant="primary",items }) => {
  const handleChecked = (key, event) => {
    console.log(key)
    console.log(items.find(i=>i.category_id===key))
    console.log(items)
    items.find(i => i.category_id === key).checked = true;
  };

  const handleSelectAll = () => {
    items.forEach(i => (i.checked = true));
  };

  const handleSelectNone = () => {
    items.forEach(i => (i.checked = false));
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="green" bsPrefix="color-green" id="dropdown-basic" style={{"backgroundColor":"#61c140", "color":"#fff"}}>
        {name}
      </Dropdown.Toggle>
      <Dropdown.Menu
        as={CheckboxMenu}
        onSelectAll={handleSelectAll}
        onSelectNone={handleSelectNone}
      >
        {items.map(i => (
          <Dropdown.Item
            key={i.category_id}
            as={CheckDropdownItem}
            id={i.category_id}
            checked={i.checked}
            onChange={handleChecked}
          >
            {i.category_name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
});
