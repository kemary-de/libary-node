export * from './types';

import axios from 'axios';

import { Config, FeatureFlag } from './types';

/**
 * Checks if a feature flag is enabled
 * @param config Uses a Config object (see src/types/index.ts)
 * @param name Name of the feature flag to check
 * @returns boolean indicating whether the feature flag is enabled
 */
async function isFeatureFlagEnabled(
  config: Config,
  name: string
): Promise<boolean> {
  try {
    const response = await axios.get(`${config.url}ff/${name}`, {
      headers: {
        token: config.token,
      },
    });
    const data = response.data as FeatureFlag;
    return data.enabled;
  } catch (error) {
    console.error('Error fetching feature flag:', error);
    throw error;
  }
}

/**
 * Gets the content of a feature flag is the flag is enabled else returns an empty string
 * @param config Uses a Config object (see src/types/index.ts)
 * @param name Name of the feature flag to check
 * @returns string containing the content of the feature flag
 */
async function getFeatureFlagContent(
  config: Config,
  name: string
): Promise<string> {
  try {
    const response = await axios.get(`${config.url}ff/${name}`, {
      headers: {
        token: config.token,
      },
    });
    const data = response.data as FeatureFlag;
    if (data.enabled) {
      return data.content;
    } else {
      return '';
    }
  } catch (error) {
    console.error('Error fetching feature flag:', error);
    throw error;
  }
}

export { isFeatureFlagEnabled, getFeatureFlagContent };
