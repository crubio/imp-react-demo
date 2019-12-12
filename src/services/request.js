import $http from '../lib/api'

function getConfigs() {
  return $http.get('ui/config')
}

function getServerStatus() {
  return $http.get('https://electricimp.statuspage.io/api/v2/components.json')
}

function getMaintenanceStatus() {
  return $http.get('https://electricimp.statuspage.io/api/v2/scheduled-maintenances.json')
}

export default {
  getConfigs,
  getServerStatus,
  getMaintenanceStatus
}