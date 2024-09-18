
# Kubernetes Deployment Project INDRA BACKEND DEVELOPER TEST 🚀

## Requirements

1. **Docker Desktop** (with Kubernetes enabled).
2. **kubectl** installed and configured.
3. `backend-app` and `frontend-app` images built locally in your Docker environment.

## Project Structure

- `backend-deployment.yml`: Deployment configuration for the backend application.
- `frontend-deployment.yml`: Deployment configuration for the frontend application.
- `backend-service.yml`: Service to expose the backend.
- `frontend-service.yml`: Service to expose the frontend.

## Deployment Instructions

### 1. Build Docker images locally

Make sure you have created the local images for `backend-app` and `frontend-app` using the following commands from the root of each project:

```bash
# For backend-app
docker build -t backend-app:latest .

# For frontend-app
docker build -t frontend-app:latest .
```

### 2. Apply the deployments

Run the following commands to deploy both the backend and frontend to your Kubernetes cluster:

```bash
kubectl apply -f backend-deployment.yml
kubectl apply -f frontend-deployment.yml
```

### 3. Create the services

To expose the services, run the following commands:

```bash
kubectl apply -f backend-service.yml
kubectl apply -f frontend-service.yml
```

### 4. Check the status of Pods and Services

#### Check the Pods:

```bash
kubectl get pods
```

Ensure that all Pods are in the `Running` state.

#### Check the Services:

```bash
kubectl get services
```

You should see `backend-service` and `frontend-service` with their exposed ports.

### 5. Access the applications

Once the services are running, you can access the applications via the following ports on your `localhost`:

- **Backend**: `http://localhost:30001`
- **Frontend**: `http://localhost:30002`

## Useful Commands

- To check the Pods:
  ```bash
  kubectl get pods
  ```

- To check the Services:
  ```bash
  kubectl get services
  ```

- To view logs of a specific Pod:
  ```bash
  kubectl logs <pod-name>
  ```

- To delete deployments or services:
  ```bash
  kubectl delete -f <file.yml>
  ```

## Additional Notes

- The `imagePullPolicy` is set to `Never`, meaning the images must be built locally.
- Ensure Docker Desktop is running and Kubernetes is enabled.