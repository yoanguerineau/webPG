export * from './gameMasterController.service';
import { GameMasterControllerService } from './gameMasterController.service';
export * from './healthCheckController.service';
import { HealthCheckControllerService } from './healthCheckController.service';
export const APIS = [GameMasterControllerService, HealthCheckControllerService];
