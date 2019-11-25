import React, { useEffect, useState } from 'react';
import { connect, getIn } from 'formik';

const FieldDependency = connect(({
  formik: { values, setFieldValue },
  field,
  dependsOn,
}) => {
  const [isFirstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setFirstRender(false);
    } else if (field === 'origin.subjects') {
      setFieldValue(field, []);
    } else {
      setFieldValue(field, null);
    }
  }, [setFieldValue, getIn(values, dependsOn), field, isFirstRender]);

  return false;
});

export default FieldDependency;
