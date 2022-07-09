import AuthContext from "context/AuthContext";
import { useContext, useState } from "react";

export default function useApiData(endpoint) {
  const { api } = useContext(AuthContext);

  const [state, setState] = useState({
    data: undefined,
    loading: false,
    error: false,
  });

  function GET(callback) {
    setState((old) => ({ ...old, loading: true }));
    api({ method: "GET", url: endpoint })
      .then((res) => {
        setState({ data: res.data, loading: false, error: false });
        callback && callback(res.data);
      })
      .catch((err) =>
        setState((old) => ({ ...old, error: err, loading: false }))
      );
  }

  function POST(data, callback) {
    setState((old) => ({ ...old, loading: true }));
    api({ method: "POST", data, url: endpoint })
      .then((res) => {
        setState({ data: res.data, loading: false, error: false });
        callback && callback(res.data);
      })
      .catch((err) =>
        setState((old) => ({ ...old, error: err, loading: false }))
      );
  }

  function PATCH(data, callback) {
    setState((old) => ({ ...old, loading: true }));
    api({ method: "PATCH", data, url: endpoint })
      .then((res) => {
        setState({ data: res.data, loading: false, error: false });
        callback && callback(res.data);
      })
      .catch((err) =>
        setState((old) => ({ ...old, error: err, loading: false }))
      );
  }

  function PUT(data, callback) {
    setState((old) => ({ ...old, loading: true }));
    api({ method: "PUT", data, url: endpoint })
      .then((res) => {
        setState({ data: res.data, loading: false, error: false });
        callback && callback(res.data);
      })
      .catch((err) =>
        setState((old) => ({ ...old, error: err, loading: false }))
      );
  }

  function DELETE(callback) {
    setState((old) => ({ ...old, loading: true }));
    api({ method: "PATCH", url: endpoint })
      .then((res) => {
        setState({ data: res.data, loading: false, error: false });
        callback && callback(res.data);
      })
      .catch((err) =>
        setState((old) => ({ ...old, error: err, loading: false }))
      );
  }

  function POSTFORM(data, callback, customendpoint) {
    const formData = new FormData();
    for (let key in data)
      if (data[key] !== undefined && data[key] !== "") {
        if (!Array.isArray(data[key])) {
          formData.append(key, data[key]);
        } else
          data[key].forEach((element) => {
            formData.append(key, element);
          });
      }

    api({
      method: "POST",
      data: formData,
      url: customendpoint ? customendpoint : endpoint,
    })
      .then((res) => {
        setState({ data: res.data, loading: false, error: false });
        callback && callback(res.data);
      })
      .catch((err) => {
        setState((old) => ({ ...old, error: err, loading: false }));
        console.log({ err });
      });
  }

  function PATCHFORM(data, callback) {
    const formData = new FormData();
    for (let key in data)
      if (data[key] !== undefined && data[key] !== "") {
        if (!Array.isArray(data[key])) {
          formData.append(key, data[key]);
        } else
          data[key].forEach((element) => {
            formData.append(key, element);
          });
      }

    api({ method: "PATCH", data: formData, url: endpoint })
      .then((res) => {
        setState({ data: res.data, loading: false, error: false });
        callback && callback(res.data);
      })
      .catch((err) =>
        setState((old) => ({ ...old, error: err, loading: false }))
      );
  }

  function PUTFORM(data, callback) {
    const formData = new FormData();
    for (let key in data)
      if (data[key] !== undefined && data[key] !== "") {
        if (!Array.isArray(data[key])) {
          formData.append(key, data[key]);
        } else
          data[key].forEach((element) => {
            formData.append(key, element);
          });
      }

    api({ method: "PUT", data: formData, url: endpoint })
      .then((res) => {
        setState({ data: res.data, loading: false, error: false });
        callback && callback(res.data);
      })
      .catch((err) =>
        setState((old) => ({ ...old, error: err, loading: false }))
      );
  }

  return {
    GET,
    POST,
    POSTFORM,
    PUT,
    PUTFORM,
    PATCH,
    PATCHFORM,
    DELETE,
    loading: state.loading,
    error: state.error,
    data: state.data,
  };
}
