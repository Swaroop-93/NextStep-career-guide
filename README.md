# 🚀 NextStep – Career Guide

NextStep is a responsive career guidance platform designed to help students explore career paths, courses, branches, learning resources, internships, scholarships, and career opportunities.

This project also demonstrates an end-to-end DevOps workflow for containerization, deployment, and monitoring.

---

## 🌟 Project Overview

NextStep provides a simple platform where students can explore different career options and make informed decisions about their education and career path.

The application is built using HTML, CSS, and JavaScript and is containerized and deployed using modern DevOps tools.

---

## 🛠️ Technologies Used

### Application
- HTML5
- CSS3
- JavaScript

### DevOps
- Git
- GitHub
- Jenkins
- Docker
- Docker Hub
- Kubernetes
- Helm
- Prometheus
- Grafana

---

## 🔄 DevOps Workflow

```text
GitHub
   ↓
Jenkins
   ↓
Docker
   ↓
Docker Hub
   ↓
Kubernetes
   ↓
Helm
   ↓
Prometheus
   ↓
Grafana


🏗️ Architecture
                    ┌──────────────┐
                    │    GitHub    │
                    │ Source Code  │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │   Jenkins    │
                    │     CI       │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │    Docker    │
                    │   Image      │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ Docker Hub   │
                    │ Image Store  │
                    └──────┬───────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │     Kubernetes     │
                 │                    │
                 │  ┌──────┐ ┌──────┐│
                 │  │ Pod  │ │ Pod  ││
                 │  └──────┘ └──────┘│
                 └─────────┬──────────┘
                           │
                           ▼
                      ┌─────────┐
                      │  Helm   │
                      │ Deploy  │
                      └────┬────┘
                           │
                ┌──────────┴──────────┐
                ▼                     ▼
         ┌─────────────┐       ┌─────────────┐
         │ Prometheus  │──────▶│   Grafana   │
         │  Metrics    │       │ Monitoring  │
         └─────────────┘       └─────────────┘
📁 Project Structure
NextStep-career-guide/
│
├── index.html
├── style.css
├── script.js
├── Dockerfile
├── Jenkinsfile
├── deployment.yaml
│
├── nextstep/
│   ├── .helmignore
│   ├── Chart.yaml
│   ├── values.yaml
│   │
│   └── templates/
│       ├── deployment.yaml
│       ├── service.yaml
│       ├── serviceaccount.yaml
│       ├── ingress.yaml
│       ├── hpa.yaml
│       ├── httproute.yaml
│       ├── _helpers.tpl
│       ├── NOTES.txt
│       │
│       └── tests/
│           └── test-connection.yaml
│
└── README.md
🔧 DevOps Implementation
1. GitHub

The project source code is maintained in GitHub.

Repository:

https://github.com/Swaroop-93/NextStep-career-guide

GitHub is used for source-code management and as the source repository for Jenkins.

2. Jenkins

Jenkins is used to create the CI pipeline.

The Jenkins pipeline connects to the GitHub repository and checks out the project source code.

Jenkins Pipeline
GitHub Repository
       ↓
   Jenkins
       ↓
    Checkout
       ↓
     Verify

The Jenkinsfile is stored in the root of the repository.

3. Docker

The NextStep application is containerized using Docker.

The application is served using Nginx.

Dockerfile
FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

EXPOSE 80
Build Docker Image
docker build -t nextstep-career-guide .
Run Container
docker run -d -p 8081:80 --name nextstep nextstep-career-guide
4. Docker Hub

The Docker image is published to Docker Hub.

swaroop56/nextstep-career-guide:latest

This image is later used by Kubernetes to deploy the application.

☸️ Kubernetes

The application is deployed to Kubernetes using Minikube.

The deployment uses two replicas for the NextStep application.

Kubernetes Deployment
replicas: 2
Apply Deployment
kubectl apply -f deployment.yaml
Check Pods
kubectl get pods
Expose Application
kubectl expose deployment nextstep-deployment --type=NodePort --port=80
⛵ Helm

The NextStep Kubernetes deployment is packaged as a Helm chart.

Helm provides a reusable and manageable way to deploy the application to Kubernetes.

Create Helm Chart
helm create nextstep
Validate Chart
helm lint ./nextstep
Install
helm install nextstep ./nextstep
Upgrade
helm upgrade nextstep ./nextstep
Check Releases
helm list

The final deployment contains:

nextstep
prometheus
grafana
📊 Prometheus

Prometheus is used for collecting Kubernetes and infrastructure metrics.

Prometheus was installed using the Prometheus Community Helm chart.

helm repo add prometheus-community https://prometheus-community.github.io/helm-charts

helm repo update

helm install prometheus prometheus-community/prometheus

Prometheus was verified using the query:

up

The targets were returning healthy values.

📈 Grafana

Grafana is used to visualize the metrics collected by Prometheus.

Grafana was installed using Helm.

helm repo add grafana-community https://grafana-community.github.io/helm-charts

helm repo update

helm install grafana grafana-community/grafana

Prometheus was configured as the Grafana data source.

📊 NextStep Kubernetes Monitoring Dashboard

A custom Grafana dashboard named:

NextStep Kubernetes Monitoring

was created.

The dashboard contains:

1. Total Kubernetes Pods
count(kube_pod_info)
2. Running Pods
count(kube_pod_status_phase{phase="Running"})
3. Node CPU Usage
100 * (1 - avg(rate(node_cpu_seconds_total{mode="idle"}[5m])))
4. Node Memory Usage
100 * (1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes))
5. NextStep Pod CPU Usage
sum by (pod) (
  rate(container_cpu_usage_seconds_total{
    namespace="default",
    pod=~"nextstep-.*",
    container!="POD",
    container!=""
  }[5m])
)
6. NextStep Pod Memory Usage
sum by (pod) (
  container_memory_working_set_bytes{
    namespace="default",
    pod=~"nextstep-.*",
    container!="POD",
    container!=""
  }
)
🚀 Running the Project
Start Minikube
minikube start --driver=docker
Verify Kubernetes
kubectl get nodes
Deploy Using Helm
helm install nextstep ./nextstep
Verify Deployment
kubectl get pods
Check Helm Releases
helm list
🔍 Project Verification

The final environment contains:

NextStep Application
      │
      ├── 2 Kubernetes Pods
      │
      ├── Helm Deployment
      │
      ├── Prometheus Monitoring
      │
      └── Grafana Dashboard

The application was successfully deployed and monitored using Kubernetes, Helm, Prometheus, and Grafana.

🎯 Key DevOps Skills Demonstrated
Git and GitHub source-code management
Jenkins CI
Docker containerization
Docker image management
Docker Hub
Kubernetes deployments
Kubernetes services
Kubernetes replicas
Helm charts
Helm deployment and upgrades
Prometheus monitoring
PromQL
Grafana dashboards
Kubernetes resource monitoring
👨‍💻 Author

Swaroop

GitHub:

https://github.com/Swaroop-93

⭐ Project Highlights

Built a career guidance platform and implemented an end-to-end DevOps workflow using GitHub, Jenkins, Docker, Docker Hub, Kubernetes, Helm, Prometheus, and Grafana.


### One change I recommend

Don't manually type this entire README into GitHub's browser editor. Since your project is already in:

```text
E:\NextStep-CICD

we should create/update the actual README.md file locally, then commit and push it just like we did with the Helm files.

If you want, I'll give you the exact PowerShell commands to create the README file and push it to GitHub, one step at a time.
